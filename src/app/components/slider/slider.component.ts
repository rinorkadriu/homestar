import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

  currentIndex = 0;

  // Array of images
  images = [
    { src: '/Kitchen_1.JPG', alt: 'Kuzhine speciale'},
    { src: '/Kitchen_2.JPG', alt: 'Kuzhine speciale'},
    { src: '/Kitchen_12.JPG', alt: 'Kuzhine speciale'},
  ];

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

}
