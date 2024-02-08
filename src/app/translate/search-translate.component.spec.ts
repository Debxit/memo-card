import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTranslateComponent } from './search-translate.component';

describe('TranslateComponent', () => {
  let component: SearchTranslateComponent;
  let fixture: ComponentFixture<SearchTranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchTranslateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
