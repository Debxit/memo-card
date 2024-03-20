import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslateService } from '../services/translate.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() content: string = '';
  private phraseSubscription: any;

  constructor(
    private translateService: TranslateService,
    private storeService: StoreService
  ) {}

  ngOnInit() {
    this.phraseSubscription = this.translateService
      .getTranslatedPhrase$()
      .subscribe((next: string) => {
        this.content = next;
      });
  }
  ngOnDestroy() {
    this.phraseSubscription.unsubscribe();
  }

  onAddToCollection(): void {
    this.storeService.storePhrase(this.content);
  }
}
