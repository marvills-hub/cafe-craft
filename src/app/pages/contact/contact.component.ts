import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { CafeConfigService } from '../../core/services/cafe-config.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly cafeConfigService = inject(CafeConfigService);

  private readonly sanitizer = inject(DomSanitizer);

  readonly cafe = this.cafeConfigService.config;

  readonly safeMapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    this.cafe.contact.mapEmbedUrl,
  );
}
