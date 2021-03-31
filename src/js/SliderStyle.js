export class SliderStyle {
  setElemntsStyle(elements) {
    elements.map(({sliderContainer, imageContainer, imagesFields, paginationButtons}) => {
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
}
