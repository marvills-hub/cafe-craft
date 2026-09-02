import { Injectable } from '@angular/core';

import { CAFE_CONFIG } from '../config/cafe.config';
import { CafeConfig } from '../models/cafe-config.model';

@Injectable({
  providedIn: 'root',
})
export class CafeConfigService {
  readonly config: CafeConfig = CAFE_CONFIG;
}
