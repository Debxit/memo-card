import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-train',
  standalone: true,
  imports: [CommonModule],
  template: `<p>train works!</p>`,
  styleUrl: './train.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainComponent {}
