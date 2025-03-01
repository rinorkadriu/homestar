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

  private currentIndex1 = 0;
  private currentIndex2 = 0;

  moveSlide(direction: number, sliderId: string) {
    const slider = sliderId === 'slider1' ? this.slider1 : this.slider2;
    let currentIndex = sliderId === 'slider1' ? this.currentIndex1 : this.currentIndex2;
    
    if (slider) {
      const totalSlides = slider.nativeElement.children.length;
      currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
      slider.nativeElement.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      if (sliderId === 'slider1') {
        this.currentIndex1 = currentIndex;
      } else {
        this.currentIndex2 = currentIndex;
      }
    }
  }
}
