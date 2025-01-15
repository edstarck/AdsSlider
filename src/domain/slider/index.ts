import { Slide } from "../slides";

export type Slider = {
  slides: Slide[];
  currentIndex: number;
};

export const createSlider = (
  slides: Slide[],
  currentIndex: number = 0
): Slider => ({
  slides,
  currentIndex,
});

export const nextSlide = (slider: Slider): Slider => {
  const nextIndex = (slider.currentIndex + 1) % slider.slides.length;
  return { ...slider, currentIndex: nextIndex };
};

export const prevSlide = (slider: Slider): Slider => {
  const prevIndex =
    (slider.currentIndex - 1 + slider.slides.length) % slider.slides.length;
  return { ...slider, currentIndex: prevIndex };
};

export const getCurrentSlide = (slider: Slider): Slide =>
  slider.slides[slider.currentIndex];
