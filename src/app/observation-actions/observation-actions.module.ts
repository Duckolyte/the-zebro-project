import { NgModule } from '@angular/core';
import { ObservationActionComponent } from './observation-action/observation-action.component';

import { CommonModule } from '@angular/common';
import { StoreModule} from '@ngrx/store';

import { observationReducer } from './observation-action.reducers';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatDatepickerModule, MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatNativeDateModule, MatSnackBarModule
} from '@angular/material';


@NgModule({
  declarations: [ObservationActionComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    FormsModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatDividerModule,
    MatSnackBarModule,
    StoreModule.forFeature('observation', observationReducer)
  ]
})

export class ObservationActionsModule { }
