import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,                     // ✅ This is required
  imports: [CommonModule],             // ✅ You must import CommonModule
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  slides = Array.from({ length: 43 }, (_, i) => ({
    image: `assets/images/${i + 1}.jpg`,
    alt: `Slide ${i + 1}`,
  }));

  currentSlide = 0;

  goToSlide(index: number) {
    const carousel = document.querySelector('#carouselExample') as any;
    if (carousel) {
      const bsCarousel = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);
      bsCarousel.to(index);
      this.currentSlide = index;
    }
  }
}

// 👇 This must be declared to use Bootstrap JS properly
declare const bootstrap: any;
