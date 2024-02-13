import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TranslateReq, TrandlateRes } from '../models/translate';
import { TARGET_LANG } from '../config';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  translatedPhrase = new BehaviorSubject<string | null>('');
  url = 'https://translation.googleapis.com/language/translate/v2?';

  constructor(public http: HttpClient) {}

  translate(data: string): void {
    this.translateRequest({ q: [data], target: TARGET_LANG }).subscribe({
      next: (data: TrandlateRes) =>
        this.translatedPhrase.next(data.data.translations[0].translatedText),
      error: (e) => console.error(e),
    });
  }

  translateRequest(obj: TranslateReq): Observable<TrandlateRes> {
    return this.http.post<TrandlateRes>(this.url, obj);
  }

  getTranslatedPhrase$(): Observable<string | null> {
    return this.translatedPhrase.asObservable();
  }
}
