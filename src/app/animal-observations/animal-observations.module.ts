import {NgModule, Pipe, PipeTransform} from '@angular/core';
import { AnimalObservationComponent } from './animal-observation/animal-observation.component';

import { CommonModule } from '@angular/common';
import { StoreModule} from '@ngrx/store';

import { animalObservationReducer } from './animal-observation.reducers';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule, MatChipsModule,
  MatDatepickerModule, MatDividerModule,
  MatFormFieldModule,
  MatGridListModule, MatIconModule,
  MatInputModule, MatListModule,
  MatNativeDateModule, MatSidenavModule, MatSnackBarModule
} from '@angular/material';
import { ObservationRowComponent } from './observation-row/observation-row.component';

@NgModule({
  declarations: [AnimalObservationComponent, ObservationRowComponent],
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
    StoreModule.forFeature('animalObservations', animalObservationReducer),
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatChipsModule
  ]
})

export class AnimalObservationsModule { }
