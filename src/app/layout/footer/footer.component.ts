import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CafeConfigService } from '../../core/services/cafe-config.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly cafeConfigService = inject(CafeConfigService);

  readonly cafe = this.cafeConfigService.config;

  readonly currentYear = new Date().getFullYear();
}
