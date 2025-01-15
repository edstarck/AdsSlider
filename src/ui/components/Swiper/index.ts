import { Slider } from "@domain/slider";
import { dotsIcon } from "@lib/constants/icons";
import type { Slide } from "@lib/types";
import {debugMessage} from "@services/utils/debugMessage";
import {initializeTooltip} from '../Tooltip';

export const createSwiperMarkup = (): string => `
  <div class="swiper">
    <div class="swiper__container"></div>
    <button class="swiper__arrow swiper__arrow--prev"></button>
    <button class="swiper__arrow swiper__arrow--next"></button>
  </div>
`;

export const renderSlide = (slide: Slide): string => `
  <div class="swiper__item unit">
    <a class="unit__href" href="#" rel="nofollow" target="_blank">
      <picture class="unit__image">
        <source type="image/webp" srcset="${slide.images[0]}">
        <source type="image/jpeg" srcset="${slide.images[1]}">
        <img loading="eager" crossorigin="anonymous" src="${slide.images[0]}" alt="${slide.title}">
      </picture>
      <div class="unit__label">${slide.label}</div>
      <div class="unit__content">
        <div class="unit__description">
          <h3 class="unit__text">${slide.title}</h3>
        </div>
      </div>
    </a>
    <div class="unit__info">
      <div class="unit__info_icon">${dotsIcon}</div>
      <div class="unit__info_content">${slide.info}</div>
    </div>
  </div>
`;

export const renderSlider = (slider: Slider, container: HTMLElement): void => {
  const gridEl = container.querySelector(".swiper__container") as HTMLElement;
  gridEl.innerHTML = slider.slides.map(renderSlide).join("");
};

export const updateArrowsState = (container: HTMLElement): void => {
  const gridEl = container.querySelector(".swiper__container") as HTMLElement;
  const leftArrowEl = container.querySelector(
    ".swiper__arrow--prev"
  ) as HTMLElement;
  const rightArrowEl = container.querySelector(
    ".swiper__arrow--next"
  ) as HTMLElement;

  if (gridEl.scrollLeft + gridEl.clientWidth >= gridEl.scrollWidth) {
    rightArrowEl.classList.remove("swiper__arrow--visible");
  } else {
    rightArrowEl.classList.add("swiper__arrow--visible");
  }

  if (gridEl.scrollLeft <= 0) {
    leftArrowEl.classList.remove("swiper__arrow--visible");
  } else {
    leftArrowEl.classList.add("swiper__arrow--visible");
  }
};

const handleNext = (container: HTMLElement): void => {
  const gridEl = container.querySelector(".swiper__container") as HTMLElement;
  const slideWidth = parseInt(
    window.getComputedStyle(gridEl.children[0] as HTMLElement).width,
    10
  );
  gridEl.scrollBy({ left: slideWidth, behavior: "smooth" });
};

const handlePrev = (container: HTMLElement): void => {
  const gridEl = container.querySelector(".swiper__container") as HTMLElement;
  const slideWidth = parseInt(
    window.getComputedStyle(gridEl.children[0] as HTMLElement).width,
    10
  );
  gridEl.scrollBy({ left: -slideWidth, behavior: "smooth" });
};

export const initializeSwiperUI = (container: HTMLElement): void => {
  container.innerHTML = createSwiperMarkup();

  initializeTooltip(container);

  const prevButton = container.querySelector('.swiper__arrow--prev') as HTMLElement;
  const nextButton = container.querySelector('.swiper__arrow--next') as HTMLElement;
  const gridEl = container.querySelector('.swiper__container') as HTMLElement;

  prevButton.addEventListener('click', () => handlePrev(container));
  nextButton.addEventListener('click', () => handleNext(container));

  gridEl.addEventListener('scroll', () => updateArrowsState(container));

  const resizeObserver = new ResizeObserver(() => {
    updateArrowsState(container);
    debugMessage(`Resize window`);
  });

  resizeObserver.observe(gridEl);

  updateArrowsState(container);

  debugMessage(`Swiper init`);
};
