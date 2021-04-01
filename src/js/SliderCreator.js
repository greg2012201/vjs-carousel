export class SliderCreator {
  constructor(numberOfImages) {
    this.fragment = new DocumentFragment();
    this.numberOfImages = parseInt(numberOfImages, 10);
    this.createElements();
    this.render();
  }

  createElements() {
    const sliderContainer = document.createElement('div');
    const imageContainer = document.createElement('div');
    const closeButton = document.createElement('button');
    const navigationBar = document.createElement('div');
    const imagesFields = this.createImagesFields();
    const paginationButtons = this.createPaginationButtons();
    const output = [
      {
        sliderContainer,
        imageContainer,
        imagesFields,
        paginationButtons,
        navigationBar,
        closeButton,
      },
    ];
    this.createElementsStructure(output);
    this.addClasses(output);
  }
  createElementsStructure(elements) {
    elements
      .flat()
      .map(
        ({
          sliderContainer,
          imageContainer,
          imagesFields,
          paginationButtons,
          navigationBar,
          closeButton,
        }) => {
          this.append([imagesFields], imageContainer);
          this.append(
            [imageContainer, paginationButtons, navigationBar, closeButton],
            sliderContainer
          );
          this.append([sliderContainer], this.fragment);
        }
      );
  }
  addClasses(elements) {
    elements
      .flat()
      .map(
        ({
          sliderContainer,
          imageContainer,
          imagesFields,
          paginationButtons,
          navigationBar,
          closeButton,
        }) => {
          sliderContainer.classList.add('slider-container');
          imageContainer.classList.add('image-container');
          imagesFields.map((field) => field.classList.add('images-fields'));
          const [leftButton, rightButton] = paginationButtons;
          leftButton.classList.add('pagination-button', 'left');
          rightButton.classList.add('pagination-button', 'right');
          navigationBar.classList.add('navigation-bar');
          closeButton.classList.add('close-button');
        }
      );
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
