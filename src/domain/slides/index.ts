export type Slide = {
  images: string[];
  label: string;
  title: string;
  info: string;
};

export const createSlide = (
  images: string[],
  label: string,
  title: string,
  info: string
): Slide => ({
  images,
  label,
  title,
  info,
});
