import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { StoreModule} from '@ngrx/store';

import {selectionReducer} from './selection-context/selection-context.reducers';
import { TheHeaderComponent } from './ui-templates/the-header/the-header.component';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [TheHeaderComponent],
  exports: [
    TheHeaderComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('selections', selectionReducer),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ]
})

export class SharedModule { }
