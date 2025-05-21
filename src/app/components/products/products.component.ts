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
      title: 'Cozy Bedroom Retreat',
      imageUrl: '/Bedroom_1.JPG',
      subtitle: 'Premium comfort for perfect nights of rest',
      rating: 4.9,
      price: '$599',
      tags: ['New Arrival', 'Best Seller', 'Eco-Friendly']
    },
    {
      title: 'Modern Single Bed',
      imageUrl: '/Bedroom_5.jpeg',
      subtitle: 'Sleek design for stylish and comfortable sleeping',
      rating: 4.7,
      price: '$149',
      tags: ['Minimalist', 'Comfort']
    },
    {
      title: 'Elegant Kitchen',
      imageUrl: '/IMG_9618.jpeg',
      subtitle: 'Handcrafted solid kitchen',
      rating: 4.8,
      price: '$299',
      tags: ['Rustic', 'Durable', 'Classic']
    },
    {
      title: 'Rustic Wooden Shelf',
      imageUrl: '/Shelf_4.jpeg',
      subtitle: 'Durable wooden shelf with classic charm',
      rating: 4.8,
      price: '$199',
      tags: ['Rustic', 'Durable', 'Classic']
    },
    {
      title: 'Beautiful Wooden Door',
      imageUrl: '/Door_4.jpg',
      subtitle: 'Handcrafted solid wood door for your home',
      rating: 4.8,
      price: '$399',
      tags: ['Rustic', 'Durable', 'Classic']
    },
    {
      title: 'Stylish Storage Shelf',
      imageUrl: '/IMG_9569.jpeg',
      subtitle: 'Functional and attractive wooden shelf',
      rating: 4.8,
      price: '$249',
      tags: ['Rustic', 'Durable', 'Classic']
    },
    {
      title: 'Modern Kitchen Design',
      imageUrl: '/IMG_9525.jpg',
      subtitle: 'Modern kitchen with functional layout',
      rating: 4.8,
      price: '$249',
      tags: ['Rustic', 'Durable', 'Classic']
    },
  
    // Newly added items
    {
      title: 'Bedroom Comfort',
      imageUrl: '/Bedroom_3.JPG',
      subtitle: 'Simple and serene bedroom design',
      rating: 4.6,
      price: '$499',
      tags: ['Comfort', 'Minimalist']
    },
    {
      title: 'Contemporary Bedroom',
      imageUrl: '/Bedroom_9.PNG',
      subtitle: 'A modern approach to bedroom styling',
      rating: 4.5,
      price: '$469',
      tags: ['Modern', 'Contemporary']
    },
    {
      title: 'Elegant Bedroom Setup',
      imageUrl: '/Bedroom_10.JPG',
      subtitle: 'A beautiful setup for restful sleep',
      rating: 4.6,
      price: '$489',
      tags: ['Elegant', 'Comfort']
    },
    {
      title: 'Bright Bedroom Design',
      imageUrl: '/Bedroom_11.JPG',
      subtitle: 'Clean and bright bedroom layout',
      rating: 4.7,
      price: '$495',
      tags: ['Bright', 'Fresh']
    },
    {
      title: 'Integrated Bedroom Shelf',
      imageUrl: '/Bedroom-shelf.JPG',
      subtitle: 'Stylish shelf built into the bedroom space',
      rating: 4.5,
      price: '$199',
      tags: ['Space-saving', 'Modern']
    },
    {
      title: 'Classic Wooden Chair',
      imageUrl: '/chair.jpeg',
      subtitle: 'Comfortable and durable wood chair',
      rating: 4.4,
      price: '$99',
      tags: ['Classic', 'Durable']
    },
    {
      title: 'Kitchen with Style',
      imageUrl: '/Kitchen_5.jpg',
      subtitle: 'Function meets beauty in this kitchen',
      rating: 4.7,
      price: '$329',
      tags: ['Kitchen', 'Modern']
    },
    {
      title: 'Kitchen View',
      imageUrl: '/Kitchen_6.JPG',
      subtitle: 'A bright and inviting kitchen',
      rating: 4.6,
      price: '$319',
      tags: ['Inviting', 'Bright']
    },
    {
      title: 'Kitchen Inspiration',
      imageUrl: '/Kitchen_11.JPG',
      subtitle: 'Inspiring kitchen design ideas',
      rating: 4.6,
      price: '$309',
      tags: ['Inspiration', 'Kitchen']
    },
    {
      title: 'Kitchen Essentials',
      imageUrl: '/IMG_9525.jpg',
      subtitle: 'All you need in one elegant kitchen',
      rating: 4.7,
      price: '$289',
      tags: ['Essentials', 'Elegant']
    },
    {
      title: 'Office Corner',
      imageUrl: '/Office_1.jpeg',
      subtitle: 'Productive and comfortable workspace',
      rating: 4.5,
      price: '$399',
      tags: ['Office', 'Work']
    },
    {
      title: 'Creative Workspace',
      imageUrl: '/Office_2.jpeg',
      subtitle: 'Perfect for productivity and style',
      rating: 4.6,
      price: '$379',
      tags: ['Creative', 'Work']
    },
    {
      title: 'Minimalist Office',
      imageUrl: '/Office_3.jpg',
      subtitle: 'Clean design for focused work',
      rating: 4.4,
      price: '$359',
      tags: ['Minimalist', 'Focused']
    },
    {
      title: 'Peaceful Bedroom',
      imageUrl: '/Room_1.JPG',
      subtitle: 'Minimalist style and quiet atmosphere',
      rating: 4.6,
      price: '$499',
      tags: ['Peaceful', 'Minimalist']
    },
  ];
  

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
