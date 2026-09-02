import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CafeConfigService } from '../../core/services/cafe-config.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly cafeConfigService = inject(CafeConfigService);

  readonly cafe = this.cafeConfigService.config;

  readonly featuredItems = [
    {
      number: '01',
      category: 'Coffee',
      name: 'Spanish Latte',
      description:
        'Smooth espresso blended with creamy milk for a rich and comforting café favorite.',
      price: 160,
      image: 'assets/images/cafe/spanish-latte.webp',
      popular: false,
    },

    {
      number: '02',
      category: 'Coffee',
      name: 'Caramel Macchiato',
      description: 'Espresso and creamy milk finished with vanilla and a generous caramel drizzle.',
      price: 165,
      image: 'assets/images/cafe/caramel-macchiato.webp',
      popular: true,
    },

    {
      number: '03',
      category: 'Pastry',
      name: 'Butter Croissant',
      description:
        'Light, flaky, and baked until golden for the perfect companion to your morning coffee.',
      price: 95,
      image: 'assets/images/cafe/butter-croissant.webp',
      popular: false,
    },
  ];

  readonly experiences = [
    {
      number: '01',
      title: 'Freshly Brewed',
      description:
        'Coffee carefully prepared throughout the day so every visit starts with a fresh cup.',
    },

    {
      number: '02',
      title: 'Comforting Flavors',
      description:
        'Familiar café favorites made for quick mornings, long conversations, and everything in between.',
    },

    {
      number: '03',
      title: 'Welcoming Space',
      description:
        'A relaxed café atmosphere where you can work, meet, unwind, or simply enjoy your coffee.',
    },

    {
      number: '04',
      title: 'Made With Care',
      description: 'Thoughtful preparation and friendly service are part of every café experience.',
    },
  ];

  formatPrice(price: number): string {
    return `₱${price}`;
  }
}
