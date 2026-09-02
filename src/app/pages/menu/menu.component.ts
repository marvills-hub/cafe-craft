import { Component, inject } from '@angular/core';
import { CafeConfigService } from '../../core/services/cafe-config.service';
import { MenuService } from '../../core/services/menu.service';
import { MenuCategory, MenuItem } from '../../core/models/menu-item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  private readonly cafeConfigService = inject(CafeConfigService);
  private readonly menuService = inject(MenuService);
  readonly cafe = this.cafeConfigService.config;
  readonly categories = this.menuService.getCategories();
  activeCategory: MenuCategory | 'All' = 'All';

  get filteredMenuItems(): MenuItem[] {
    return this.menuService.getItemsByCategory(this.activeCategory);
  }

  setCategory(category: MenuCategory | 'All'): void {
    this.activeCategory = category;
  }

  formatPrice(price: number): string {
    return `₱${price.toFixed(0)}`;
  }
}
