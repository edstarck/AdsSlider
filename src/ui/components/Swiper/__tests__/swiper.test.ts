import {createSwiperMarkup, renderSlide, updateArrowsState} from '../../Swiper';
import type {Slide} from '@lib/types';
// import {initializeTooltip} from '@components/Tooltip';

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
});

describe('createSwiperMarkup', () => {
  it('should return correct HTML markup', () => {
    const markup = createSwiperMarkup();
    expect(markup).toContain('<div class="swiper">');
    expect(markup).toContain('<div class="swiper__container">');
    expect(markup).toContain('<button class="swiper__arrow swiper__arrow--prev">');
    expect(markup).toContain('<button class="swiper__arrow swiper__arrow--next">');
  });
});

describe('renderSlide', () => {
  it('should render a slide with correct content', () => {
    const slide: Slide = {
      images: ['image1.webp', 'image1.jpg'],
      label: 'Реклама',
      title: 'Заголовок',
      info: 'Информация',
    };

    const slideHTML = renderSlide(slide);
    expect(slideHTML).toContain('<div class="swiper__item unit">');
    expect(slideHTML).toContain('<img loading="eager" crossorigin="anonymous" src="image1.webp"');
    expect(slideHTML).toContain('<div class="unit__label">Реклама</div>');
    expect(slideHTML).toContain('<h3 class="unit__text">Заголовок</h3>');
  });
});

describe('updateArrowsState', () => {
  it('should hide next arrow when scrolled to the end', () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <div class="swiper__container" style="width: 200px; overflow: hidden;">
        <div style="width: 400px;"></div>
      </div>
      <button class="swiper__arrow swiper__arrow--prev"></button>
      <button class="swiper__arrow swiper__arrow--next"></button>
    `;

    const gridEl = container.querySelector('.swiper__container') as HTMLElement;
    gridEl.scrollLeft = 200; // Прокручиваем до конца

    updateArrowsState(container);

    const nextArrow = container.querySelector('.swiper__arrow--next') as HTMLElement;
    expect(nextArrow.classList.contains('swiper__arrow--visible')).toBe(false);
  });

  it('should hide prev arrow when scrolled to the start', () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <div class="swiper__container" style="width: 200px; overflow: hidden;">
        <div style="width: 400px;"></div>
      </div>
      <button class="swiper__arrow swiper__arrow--prev"></button>
      <button class="swiper__arrow swiper__arrow--next"></button>
    `;

    const gridEl = container.querySelector('.swiper__container') as HTMLElement;
    gridEl.scrollLeft = 0;

    updateArrowsState(container);

    const prevArrow = container.querySelector('.swiper__arrow--prev') as HTMLElement;
    expect(prevArrow.classList.contains('swiper__arrow--visible')).toBe(false);
  });
});