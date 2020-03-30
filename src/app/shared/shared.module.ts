import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { StoreModule} from '@ngrx/store';

import {selectionReducer} from './selection-context/selection-context.reducers';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('selections', selectionReducer)
  ]
})

export class SharedModule { }
