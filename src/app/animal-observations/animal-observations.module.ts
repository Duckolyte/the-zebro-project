import { NgModule } from '@angular/core';
import { AnimalObservationComponent } from './animal-observation/animal-observation.component';

import { CommonModule } from '@angular/common';
import { StoreModule} from '@ngrx/store';

import { animalObservationReducer } from './animal-observation.reducers';
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
  declarations: [AnimalObservationComponent],
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
    StoreModule.forFeature('animalObservation', animalObservationReducer)
  ]
})

export class AnimalObservationsModule { }
