import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Café Craft',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About | Café Craft',
  },
  {
    path: 'menu',
    component: MenuComponent,
    title: 'Menu | Café Craft',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact | Café Craft',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
