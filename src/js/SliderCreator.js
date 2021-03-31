import {SliderStyle} from './SliderStyle';

export class SliderCreator {
  constructor(numberOfImages) {
    this.fragment = new DocumentFragment();
    console.log(numberOfImages);
    this.numberOfImages = parseInt(numberOfImages, 10);
    this.sliderStyle = new SliderStyle();
    this.createElements();
    this.render();
  }

  createElements() {
    const sliderContainer = document.createElement('div');
    const imageContainer = document.createElement('div');
    const imagesFields = this.createImagesFields();
    const paginationButtons = this.createPaginationButtons();
    const output = [{sliderContainer, imageContainer, imagesFields, paginationButtons}];
    this.createElementsStructure(output);
    this.addClasses(output);
    this.sliderStyle.setElemntsStyle(output);
  }
  createElementsStructure(elements) {
    elements.flat().map(({sliderContainer, imageContainer, imagesFields, paginationButtons}) => {
      this.append([imagesFields], imageContainer);
      this.append([imageContainer, paginationButtons], sliderContainer);
      this.append([sliderContainer], this.fragment);
    });
  }
  addClasses(elements) {
    elements.flat().map(({sliderContainer, imageContainer, imagesFields, paginationButtons}) => {
      sliderContainer.classList.add('slider-container');
      imageContainer.classList.add('image-container');
      imagesFields.map((field) => field.classList.add('images-fields'));
      const [leftButton, rightButton] = paginationButtons;
      leftButton.classList.add('pagination-button', 'left');
      rightButton.classList.add('pagination-button', 'right');
    });
  }
  createImagesFields() {
    let output = [];

    for (let i = 0; i < this.numberOfImages; i++) {
      const imagesFields = document.createElement('img');

      output.push(imagesFields);
    }

    return output;
  }
  append(children, parent) {
    children.flat().map((child) => {
      parent.appendChild(child);
    });
  }
  createPaginationButtons() {
    let buttons = [];
    for (let i = 0; i < 2; i++) {
      const button = document.createElement('button');
      const arrow = document.createElement('span');

      this.append([arrow], button);

      buttons.push(button);
    }
    return buttons;
  }

  render() {
    document.body.appendChild(this.fragment);
  }
  deleteElements() {}
}
