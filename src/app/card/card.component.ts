
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() content: string | null = '';
  private phraseSubscription: any;

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.phraseSubscription = this.translateService
      .getTranslatedPhrase$()
      .subscribe((next) => {
        this.content = next;
      });
  }
  ngOnDestroy() {
    this.phraseSubscription.unsubscribe();
  }
}
