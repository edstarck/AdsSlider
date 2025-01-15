// import {debugMessage} from '@services/utils/debugMessage';
export const initializeTooltip = (container: HTMLElement): void => {
    const icons = container.querySelectorAll('.unit__info_icon');

    icons.forEach((icon) => {
      const tooltip = icon.nextElementSibling as HTMLElement | null;

      if (tooltip && tooltip.classList.contains('unit__info_content')) {
        icon.addEventListener('click', (event) => {
          event.preventDefault();
          event.stopPropagation();
          tooltip.classList.toggle('visible');
        });

        // Скрываем тултип при клике вне иконки и тултипа
        document.addEventListener('click', (event) => {
          const target = event.target as HTMLElement;

          if (!icon.contains(target) && !tooltip.contains(target)) {
            tooltip.classList.remove('visible');
          }
        });
      }
    });
};
