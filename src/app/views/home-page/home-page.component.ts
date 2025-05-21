import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { HomeBannerComponent } from "../../components/home-banner/home-banner.component";
import { ProductsComponent } from '../../components/products/products.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { TestiomionalComponent } from "../../components/testiomional/testiomional.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavigationComponent, HomeBannerComponent,
    ProductsComponent, GalleryComponent, FooterComponent, SliderComponent, TestiomionalComponent, TestiomionalComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
