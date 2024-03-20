import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatListModule } from '@angular/material/list';

import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-train',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './train.component.html',
  styleUrl: './train.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainComponent implements OnInit, OnDestroy {
  phrases: string[] = [];
  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.phrases = this.storeService.getPhrasesCollection();
  }

  ngOnDestroy() {}
}
