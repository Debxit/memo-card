import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-search-translate',
  templateUrl: './search-translate.component.html',
  styleUrls: ['./search-translate.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgIf,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ]
})
export class SearchTranslateComponent {
  translateForm = new FormGroup({
    translateControl: new FormControl(''),
  });

  constructor(private translateService: TranslateService) {}

  translatePhrase() {
    this.translateService.translate(
      '' + this.translateForm.value.translateControl
    );
  }
  clearForm() {
    this.translateForm.reset();
  }
}
