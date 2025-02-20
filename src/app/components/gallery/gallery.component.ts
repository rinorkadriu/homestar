import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {

  selectedTab: number = 0; // Default to the first tab

  images = [
    { src: '/Kitchen_1.JPG', alt: 'Kuzhine speciale', caption: 'Kuzhine speciale' },
    { src: '/Kitchen_2.JPG', alt: 'Kuzhine speciale', caption: 'Kuzhine speciale' },
    { src: '/Kitchen_12.JPG', alt: 'Kuzhine speciale', caption: 'Kuzhine speciale' },
    { src: '/Kitchen_4.JPG', alt: 'Kuzhine speciale', caption: 'Kuzhine speciale' },
    { src: '/Door_4.jpg', alt: 'Kuzhine speciale', caption: 'Kuzhine speciale' },
    { src: '/IMG_DOOR_3.jpg', alt: 'Office 1', caption: 'Modern Office 1' },
    { src: '/IMG_DOOR_2.jpg', alt: 'Office 1', caption: 'Modern Office 1' },
    { src: '/IMG_DOOR_1.JPG', alt: 'Kuzhine speciale', caption: 'Kuzhine speciale' },
    { src: '/Door_2.jpg', alt: 'Office 1', caption: 'Modern Office 1' },
    { src: '/Door_3.jpg', alt: 'Office 1', caption: 'Modern Office 1' },
    { src: '/Bedroom_1.JPG', alt: 'Office 1', caption: 'Modern Office 1' },
    { src: '/Bedroom_3.JPG', alt: 'Office 1', caption: 'Modern Office 1' },
    { src: '/Bedroom_5.jpeg', alt: 'Office 1', caption: 'Modern Office 1' },
    { src: '/Bedroom_6.JPG', alt: 'Office 1', caption: 'Modern Office 1' },
    { src: '/Bedroom_7.JPG', alt: 'Office 1', caption: 'Modern Office 1' },
    { src: '/Bedroom_8.JPG', alt: 'Office 1', caption: 'Modern Office 1' },
    { src: '/Bedroom_9.PNG', alt: 'Office 1', caption: 'Modern Office 1' },
    { src: '/Bedroom_10.JPG', alt: 'Office 1', caption: 'Modern Office 1' },
    { src: '/Bedroom_11.JPG', alt: 'Office 1', caption: 'Modern Office 1' },
    { src: '/Bedroom_12.jpeg', alt: 'Office 1', caption: 'Modern Office 1' },
    // Add more images as needed
  ];

  imagesTab1 = this.images.slice(0, 20); // First 4 images
  imagesTab2 = this.images.slice(2, 8); // Next 4 images
  imagesTab3 = this.images.slice(4, 10); // Next 4 images
  imagesTab4 = this.images.slice(1, 5);; // You can fill this with additional images if available
  imagesTab5 = this.images.slice(10, 20);; // You can fill this with additional images if available

  selectTab(index: number) {
    this.selectedTab = index; // Change the selected tab
  }

  isVisible(tabIndex: number, imageIndex: number): boolean {
    return this.selectedTab === tabIndex; // Return true if the tab is selected
  }

}
