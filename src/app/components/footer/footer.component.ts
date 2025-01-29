import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  isVisible = false; // Track visibility of the footer

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true; // Set to true when footer is in view
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    });

    const footerElement = document.querySelector('.footer');
    if (footerElement) {
      observer.observe(footerElement); // Observe the footer element
    }
  }

}
