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
    this.sliderStyle.setElemntsStyle(output);
  }
  createElementsStructure(elements) {
    elements.flat().map(({sliderContainer, imageContainer, imagesFields, paginationButtons}) => {
      this.append([imagesFields], imageContainer);
      this.append([imageContainer, paginationButtons], sliderContainer);
      this.append([sliderContainer], this.fragment);
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
    const right = document.createElement('div');
    const left = document.createElement('div');
    const arrowRight = document.createElement('span');
    const arrowLeft = document.createElement('span');
    this.append([arrowRight], right);
    this.append([arrowLeft], left);
    return [right, left];
  }

  render() {
    document.body.appendChild(this.fragment);
  }
  deleteElements() {}
}
