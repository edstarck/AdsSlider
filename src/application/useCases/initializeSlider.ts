import { Slider } from "@domain/slider";
import {
  initializeSwiperUI,
  renderSlider,
  updateArrowsState,
} from "@ui/components/Swiper";

export const initializeSlider = (
  slider: Slider,
  container: HTMLElement
): void => {
  initializeSwiperUI(container);
  renderSlider(slider, container);
  updateArrowsState(container);
};
