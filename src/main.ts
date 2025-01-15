import './style.css';
import {createSlide, createSlider} from './domain';
import {initializeSlider} from '@application/useCases';
import {debugMessage} from '@services/utils/debugMessage';

const slides = [
  createSlide(
    [
      'https://zn4.2xclick.ru/img/192x256/180/3556180_5aaa127c9f.webp',
      'https://zn4.2xclick.ru/img/192x256/180/3556180_5aaa127c9f.jpg',
    ],
    'Реклама',
    'Таких всего 3. Самые гулящие женщины по знаку зодиака',
    'Рекламодатель: OАО «KOLGED»<br />ИНН: 3242343675465<br />ERID: 26tewyweyu2',
  ),
  createSlide(
    [
      'https://zn4.2xclick.ru/img/192x256/602/3422602_52fcfec136.webp',
      'https://zn4.2xclick.ru/img/192x256/602/3422602_52fcfec136.jpg',
    ],
    'Реклама',
    'Пьяная вдрызг Волочкова перешла границы: похабные кадры 14 января шокировали',
    'Рекламодатель: OАО «KOLGED»<br />ИНН: 3242343675465<br />ERID: 26tewyweyu2',
  ),
  createSlide(
    [
      'https://i.cdnfimgs.com/auto/210x286/image/tesr/3945/945/672bc47a13478t1730921594r2257.jpg',
      'https://i.cdnfimgs.com/auto/210x286/image/tesr/3945/945/672bc47a13478t1730921594r2257.jpg',
    ],
    'Реклама',
    'Показ нижнего белья пошел не по плану: только посмотрите видео',
    'Рекламодатель: OАО «KOLGED»<br />ИНН: 3242343675465<br />ERID: 26tewyweyu2',
  ),
  createSlide(
    [
      'https://zn5.2xclick.ru/img/192x256/593/3552593_9c17d994a9.webp',
      'https://zn5.2xclick.ru/img/192x256/593/3552593_9c17d994a9.jpg',
    ],
    'Реклама',
    'Знаки зодиака, которые будут купаться в деньгах в год Змеи',
    'Рекламодатель: OАО «KOLGED»<br />ИНН: 3242343675465<br />ERID: 26tewyweyu2',
  ),
  createSlide(
    [
      'https://i.cdnfimgs.com/auto/210x286/image/tesr/6575/575/672e5b6fc1901t1731091311r9388.jpg',
      'https://i.cdnfimgs.com/auto/210x286/image/tesr/6575/575/672e5b6fc1901t1731091311r9388.jpg',
    ],
    'Реклама',
    'Лиза Галкина подросла и запела: люди в шоке от исполнения - видео',
    'Рекламодатель: OАО «KOLGED»<br />ИНН: 3242343675465<br />ERID: 26tewyweyu2',
  ),
];

const initSwiper = (containerId: string): void => {
  const checkContainer = () => {
    const container = document.getElementById(containerId);

    if (container) {
      debugMessage(`Container found: ${containerId}`);
      const slider = createSlider(slides);
      initializeSlider(slider, container);
      return;
    }

    // Если контейнер не найден, настраиваем MutationObserver
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          for (const node of mutation.addedNodes) {
            if (node instanceof HTMLElement && node.id === containerId) {
              debugMessage(`Container found: ${containerId}`);
              const slider = createSlider(slides);
              initializeSlider(slider, node as HTMLElement);
              observer.disconnect();
              return;
            }
          }
        }
      }
    });

    const config = {
      childList: true,
      subtree: true,
    };

    observer.observe(document.body, config);
  };

  checkContainer();
};

initSwiper('containerId577575');
