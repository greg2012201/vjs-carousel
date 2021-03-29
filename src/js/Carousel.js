import {SliderCreator} from './createSlider';

export class Carousel {
  constructor(event, container) {
    new SliderCreator();
    this.event = event;
    this.container = container;
  }

  getImages() {
    return (images = [...this.container.querySelectorAll('img')]);
  }
  getClickedImage() {
    return this.event.target;
  }
  openSlider() {}
  closeSlider() {}
  pagination() {}
}
