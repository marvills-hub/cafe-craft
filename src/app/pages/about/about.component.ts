import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CafeConfigService } from '../../core/services/cafe-config.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private readonly cafeConfigService = inject(CafeConfigService);

  readonly cafe = this.cafeConfigService.config;
}
