import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productVisible: boolean[] = []; // Track visibility of each product
  homeStarVisible = false; // Track visibility of the HomeStar section

  ngOnInit() {
    const productCards = document.querySelectorAll('.product-card');
    const homeStarSection = document.querySelector('.home-star-section'); // Select the HomeStar section

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('product-card')) {
            const index = Array.from(productCards).indexOf(entry.target);
            this.productVisible[index] = true; // Set to true when product is in view
          } else if (entry.target.classList.contains('home-star-section')) {
            this.homeStarVisible = true; // Set to true when HomeStar section is in view
          }
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    });

    productCards.forEach(card => {
      observer.observe(card); // Observe each product card
    });

    if (homeStarSection) {
      observer.observe(homeStarSection); // Observe the HomeStar section
    }
  }
}
