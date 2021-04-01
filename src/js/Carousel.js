import {SliderCreator} from './SliderCreator';

export class Carousel {
  constructor(event, container) {
    this.container = container;
    this.images = [...this.container.querySelectorAll('img')];
    new SliderCreator(this.images.length);
    this.event = event;
    /* this.placeImage(); */
  }

  getImages() {
    return (images = [...this.container.querySelectorAll('img')]);
  }
  getClickedImage() {
    return this.event.target;
  }
  /*  placeImage() {
    const img = this.fragment.querySelector('img');

    console.log(img);
    this.images.forEach((element) => {
      const path = element.getAttribute('src');
      img.setAttribute('src', path);
    });
  } */
  openSlider() {}
  closeSlider() {}
  pagination() {}
}
