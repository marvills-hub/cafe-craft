import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CafeThemeService } from './core/services/cafe-theme.service';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, NavbarComponent, FooterComponent],

  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly cafeThemeService = inject(CafeThemeService);

  constructor() {
    this.cafeThemeService.applyTheme();
  }
}
