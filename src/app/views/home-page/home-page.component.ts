import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { HomeBannerComponent } from "../../components/home-banner/home-banner.component";
import { ProductsComponent } from '../../components/products/products.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavigationComponent, HomeBannerComponent, ProductsComponent, GalleryComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
