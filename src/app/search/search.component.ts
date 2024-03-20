import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SearchTranslateComponent } from '../translate/search-translate.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, CardComponent, SearchTranslateComponent],
  template: `<app-search-translate></app-search-translate>
    <app-card></app-card>`,
  styleUrl: './search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {}
