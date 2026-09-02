export type MenuCategory = 'Coffee' | 'Non-Coffee' | 'Pastries' | 'Meals';

export interface MenuItem {
  id: number;

  name: string;

  description: string;

  price: number;

  category: MenuCategory;

  image: string;

  featured?: boolean;

  available?: boolean;
}
