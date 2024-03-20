import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

// It's a mock service. In the future there will be API reqiests to put and get stored phrases
export class StoreService {
  private phrases: string[] = [];
  constructor() {}

  public storePhrase(text: string): void {
    this.phrases.push(text);
  }

  public getPhrasesCollection(): string[] {
    return this.phrases;
  }
}
