import { Injectable } from '@angular/core';

import { MENU_ITEMS } from '../config/menu.config';

import { MenuCategory, MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  readonly items: MenuItem[] = MENU_ITEMS;

  getCategories(): Array<MenuCategory | 'All'> {
    const categories = new Set<MenuCategory>();

    for (const item of this.items) {
      categories.add(item.category);
    }

    return ['All', ...categories];
  }

  getAvailableItems(): MenuItem[] {
    return this.items.filter((item) => item.available !== false);
  }

  getFeaturedItems(): MenuItem[] {
    return this.getAvailableItems().filter((item) => item.featured);
  }

  getItemsByCategory(category: MenuCategory | 'All'): MenuItem[] {
    const items = this.getAvailableItems();

    if (category === 'All') {
      return items;
    }

    return items.filter((item) => item.category === category);
  }
}
