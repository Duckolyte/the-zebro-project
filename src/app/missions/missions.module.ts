import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule} from '@ngrx/store';
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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MissionComponent } from './mission/mission.component';
import { HomeComponent } from './home/home.component';
import { missionReducer } from './mission.reducers';


@NgModule({
  declarations: [
    MissionComponent,
    HomeComponent
  ],
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
    StoreModule.forFeature('missions', missionReducer)
  ]
})

export class MissionsModule { }
