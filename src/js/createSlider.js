export class SliderCreator {
  constructor() {
    this.fragment = new DocumentFragment();
    this.createElements();
    this.render();
  }

  createElements() {
    const mask = document.createElement('div');
    const span = document.createElement('span');

    this.appendToFragment([div, span]);
  }
  appendToFragment(elements) {
    elements.map((element) => {
      this.fragment.appendChild(element);
    });
  }
  elemntsStyle() {}
  render() {
    const span = this.fragment.querySelector('span');

    document.body.appendChild(fragment);
  }
  deleteElements() {}
}
