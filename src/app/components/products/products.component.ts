import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
export interface CardItem {
  title: string;
  subtitle: string;
  imageUrl: string;
  price: string;
  tags?: string[];
  badge?: string;
  rating?: number;
  detailedDescription?: string;
  features?: string[];
  reviews?: { name: string; comment: string }[];
}
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

  selectedCard: CardItem | null = null;
  showModal = false;

  cards: CardItem[] = [
    {
      title: 'Enjoy your sleep!',
      imageUrl: '/Bedroom_1.JPG',
      subtitle: 'Premium comfort for perfect nights',
      rating: 4.9,
      price: '$599',
      tags: ['New Arrival', 'Best Seller', 'Eco-Friendly']
    },
    {
      title: 'Single bed!',
      imageUrl: '/Bedroom_5.jpeg',
      subtitle: 'Stylish seating for any room',
      rating: 4.7,
      price: '$149',
      tags: ['Minimalist', 'Comfort']
    },
    {
      title: 'Wooden Table',
      imageUrl: '/Kitchen_3.JPG',
      subtitle: 'Handcrafted solid wood table',
      rating: 4.8,
      price: '$299',
      tags: ['Rustic', 'Durable', 'Classic']
    },
    {
      title: 'Wooden Table',
      imageUrl: '/Shelf_4.jpeg',
      subtitle: 'Handcrafted solid wood table',
      rating: 4.8,
      price: '$299',
      tags: ['Rustic', 'Durable', 'Classic']
    },
    {
      title: 'Wooden Table',
      imageUrl: '/Door_2.jpg',
      subtitle: 'Handcrafted solid wood table',
      rating: 4.8,
      price: '$299',
      tags: ['Rustic', 'Durable', 'Classic']
    }
  ];
  
  getStars(rating: number): number[] {
    // Return array of length equal to rounded rating for stars
    return Array(Math.round(rating)).fill(0);
  }

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

  openModal(card: CardItem) {
    this.selectedCard = card;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedCard = null;
  }
}
