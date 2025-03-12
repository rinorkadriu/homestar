import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  @ViewChild('slider1', { static: false }) slider1!: ElementRef;
  @ViewChild('slider2', { static: false }) slider2!: ElementRef;
  @ViewChild('slider3', { static: false }) slider3!: ElementRef;

  private currentIndex = { slider1: 0, slider2: 0, slider3: 0 };
  private slideWidth = 750; // Adjust this to match your image width

  moveSlide(direction: number, sliderName: 'slider1' | 'slider2' | 'slider3') {
    const sliderElement = this[sliderName].nativeElement;
    this.slideWidth = sliderElement.clientWidth; // Get actual width
    this.currentIndex[sliderName] = (this.currentIndex[sliderName] + direction + 3) % 3;
    sliderElement.style.transform = `translateX(-${this.currentIndex[sliderName] * this.slideWidth}px)`;
  }
  
}
