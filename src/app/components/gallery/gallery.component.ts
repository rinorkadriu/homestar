import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements AfterViewInit {

  slideIndex = 0;
  @ViewChild('slider') slider!: ElementRef;

  ngAfterViewInit() {
    this.autoSlide();
  }

  autoSlide() {
    setInterval(() => {
      this.moveSlide(1); // Auto slide every 3 seconds
    }, 20000);
  }

  moveSlide(n: number) {
    const slides = document.getElementsByClassName("slide") as HTMLCollectionOf<HTMLElement>;
    this.slideIndex += n;

    if (this.slideIndex >= slides.length) {
      this.slideIndex = 0;
    }
    if (this.slideIndex < 0) {
      this.slideIndex = slides.length - 1;
    }

    const offset = -this.slideIndex * 100; // Move by 100% width
    (this.slider.nativeElement as HTMLElement).style.transform = `translateX(${offset}%)`;
  }
}
