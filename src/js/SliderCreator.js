export class SliderCreator {
  constructor(numberOfImages) {
    this.fragment = new DocumentFragment();
    this.numberOfImages = parseInt(numberOfImages, 10);
    this.createElements();
    this.render();
  }

  createElements() {
    this.sliderContainer = document.createElement('div');
    this.imageContainer = document.createElement('div');
    this.closeButton = document.createElement('button');
    this.navigationBar = document.createElement('div');
    this.imagesFields = this.createImagesFields();
    this.paginationButtons = this.createPaginationButtons();
    this.createElementsStructure();
    this.addClasses();
  }
  createElementsStructure() {
    this.append([this.imagesFields], this.imageContainer);
    this.append(
      [
        this.imageContainer,
        this.paginationButtons,
        this.navigationBar,
        this.closeButton,
      ],
      this.sliderContainer
    );
    this.append([this.sliderContainer], this.fragment);
  }
  addClasses() {
    this.sliderContainer.classList.add('slider-container');
    this.imageContainer.classList.add('image-container');
    this.imagesFields.map((field) => field.classList.add('images-fields'));
    const [leftButton, rightButton] = this.paginationButtons;
    leftButton.classList.add('pagination-button', 'left');
    rightButton.classList.add('pagination-button', 'right');
    this.navigationBar.classList.add('navigation-bar');
    this.closeButton.classList.add('close-button');
  }
  createImagesFields() {
    let output = [];

    for (let i = 0; i < this.numberOfImages; i++) {
      const imagesFields = document.createElement('img');

      output.push(imagesFields);
    }

    return output;
  }

  createPaginationButtons() {
    let buttons = [];
    for (let i = 0; i < 2; i++) {
      const button = document.createElement('button');
      buttons.push(button);
    }
    return buttons;
  }

  append(children, parent) {
    children.flat().map((child) => {
      parent.appendChild(child);
    });
  }
  render() {
    document.body.appendChild(this.fragment);
  }
  deleteElements() {}
}
