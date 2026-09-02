import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

import { CafeConfigService } from './cafe-config.service';

@Injectable({
  providedIn: 'root',
})
export class CafeThemeService {
  private readonly document = inject(DOCUMENT);

  private readonly cafeConfigService = inject(CafeConfigService);

  applyTheme(): void {
    const theme = this.cafeConfigService.config.theme;

    const root = this.document.documentElement;

    root.style.setProperty('--color-primary', theme.primaryColor);

    root.style.setProperty('--color-primary-dark', theme.primaryDarkColor);

    root.style.setProperty('--color-accent', theme.accentColor);

    root.style.setProperty('--color-dark', theme.darkColor);

    root.style.setProperty('--color-text', theme.textColor);

    root.style.setProperty('--color-muted', theme.mutedColor);

    root.style.setProperty('--color-background', theme.backgroundColor);

    root.style.setProperty('--color-surface', theme.surfaceColor);

    root.style.setProperty('--color-soft', theme.softColor);

    root.style.setProperty('--font-heading', theme.headingFont);

    root.style.setProperty('--font-body', theme.bodyFont);

    root.style.setProperty('--radius-sm', theme.borderRadiusSmall);

    root.style.setProperty('--radius-md', theme.borderRadiusMedium);

    root.style.setProperty('--radius-lg', theme.borderRadiusLarge);
  }
}
