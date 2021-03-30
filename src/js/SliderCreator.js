export class SliderCreator {
  constructor(numberOfImages) {
    this.fragment = new DocumentFragment();
    console.log(numberOfImages);
    this.numberOfImages = parseInt(numberOfImages, 10);
    this.createElements();
    this.render();
  }

  createElements() {
    const sliderContainer = document.createElement('div');
    const imageContainer = document.createElement('div');
    const imagesFields = this.createImagesFields();

    this.append([imagesFields], imageContainer);
    this.append([imageContainer], sliderContainer);
    this.append([sliderContainer], this.fragment);
    this.elemntsStyle([{sliderContainer, imageContainer, imagesFields}]);
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
  elemntsStyle(elements) {
    elements.map(({sliderContainer, imageContainer, imagesFields}) => {
      imageContainer.style.display = 'flex';
      imageContainer.style.overflow = 'hidden';
      imageContainer.style.height = '70%';
      imageContainer.style.width = '100%';
      imageContainer.style.gridRow = '1/2';
      imageContainer.style.gridColumn = '2/3';

      sliderContainer.style.position = 'fixed';
      sliderContainer.style.display = 'grid';
      sliderContainer.style.gridTemplateRows = '90% 1fr';
      sliderContainer.style.gridTemplateColumns = '15% 70% 15%';
      sliderContainer.style.alignItems = 'center';
      sliderContainer.style.left = '0';
      sliderContainer.style.top = '0';
      sliderContainer.style.height = '100vh';
      sliderContainer.style.width = '100%';
      sliderContainer.style.backgroundColor = 'rgba(0,0,0,0.20)';

      imagesFields.map((img) => {
        img.style.height = '100%';
        img.style.width = '100%';
        img.style.flexShrink = '0';
        img.style.backgroundColor = 'green';
      });
    });
  }

  render() {
    document.body.appendChild(this.fragment);
  }
  deleteElements() {}
}
