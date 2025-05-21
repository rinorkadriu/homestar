import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testiomional',
  standalone: true,
  imports: [NgFor],
  templateUrl: './testiomional.component.html',
  styleUrl: './testiomional.component.scss'
})
export class TestiomionalComponent {

  testimonials = [
    {
      name: 'Ardiana K.',
      role: 'Interior Designer',
      quote: 'Their furniture transformed my client’s home. Exceptional craftsmanship and detail!',
    },
    {
      name: 'Leon D.',
      role: 'Homeowner',
      quote: 'I loved the modern kitchen set I ordered. Delivery was quick and the quality was superb.',
    },
    {
      name: 'Blerina R.',
      role: 'Architect',
      quote: 'I’ve recommended their shelves and doors for multiple projects. Solid and elegant.',
    }
  ];

}
