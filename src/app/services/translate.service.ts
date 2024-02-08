import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  translatedPhrase = new BehaviorSubject<string | null>('');

  translate(val: string | null) {
    this.translatedPhrase.next(val);
  }
  getTranslatedPhrase$(): Observable<string | null> {
    return this.translatedPhrase.asObservable();
  }
}
