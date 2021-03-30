export class SliderCreator {
  constructor() {
    this.fragment = new DocumentFragment();
    this.createElements();
    /* this.placeImage(); */
    this.render();
  }

  createElements() {
    const mask = document.createElement('div');
    const imageContainer = document.createElement('img');
    const output = [mask, imageContainer];
    this.elemntsStyle([{mask, imageContainer}]);
    this.appendToFragment(output);
  }
  appendToFragment(elements) {
    elements.map((element) => {
      this.fragment.appendChild(element);
    });
  }
  elemntsStyle(elements) {
    elements.map(({mask, imageContainer}) => {
      mask.style.position = 'fixed';
      mask.style.display = 'grid';
      mask.style.gridTemplateRows = '90% 1fr';
      mask.style.gridTemplateColumns = '15% 1fr 15%';
      mask.style.alignItems = 'center';
      mask.style.left = '0';
      mask.style.top = '0';
      mask.style.height = '100vh';
      mask.style.width = '100%';
      mask.style.backgroundColor = 'rgba(0,0,0,0.20)';

      imageContainer.style.height = '70%';
      imageContainer.style.width = '100%';
      imageContainer.style.gridRow = '1/2';
      imageContainer.style.gridColumn = '2/3';
    });
  }

  render() {
    const mask = this.fragment.querySelector('div');
    const imageContainer = this.fragment.querySelector('img');
    mask.appendChild(imageContainer);
    document.body.appendChild(mask);
  }
  deleteElements() {}
}
