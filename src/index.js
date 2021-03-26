import './sass/index.scss';

import { Carousel } from './js/Carousel.js';

window.addEventListener('DOMContentLoaded', () => {
  /* const carousel = new Carousel() */ const thumbnails = [
    ...document.querySelectorAll('.thumbnail'),
  ];

  thumbnails.map((element) =>
    element.addEventListener('click', (e) => {
      const carouselContainer = document.querySelector('#carousel-container');

      new Carousel(e, carouselContainer);
    })
  );
});
