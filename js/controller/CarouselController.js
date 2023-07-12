import BaseController from './BaseController.js';

export default class CarouselController extends BaseController {
  constructor(element) {
    super(element);
    this.carouselItems = document.querySelectorAll('.carousel-item');
    this.currentIndex = 0;
    this.showSlide(this.currentIndex);
    this.handleClick();
  }

  showSlide(index) {
    this.carouselItems.forEach(item => item.classList.remove('active'));
    this.carouselItems[index].classList.add('active');
  }

  handleClick() {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    next.addEventListener('click', event => {
      this.showNextSlide();
    });
    prev.addEventListener('click', event => {
      this.showPrevSlide();
    });
  }

  showNextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
    this.showSlide(this.currentIndex);
  }

  showPrevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.carouselItems.length) %
      this.carouselItems.length;
    this.showSlide(this.currentIndex);
  }
}
