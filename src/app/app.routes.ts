import { Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { TrainComponent } from './train/train.component';

export const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'train', component: TrainComponent },
];
