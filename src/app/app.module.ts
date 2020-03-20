import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AnimalListComponent } from './view/animal-list/animal-list.component';
import { ZebraProfilComponent } from './view/zebra-profil/zebra-profil.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ErrorPageComponent } from './page/error-page/error-page.component';
import { MissionComponent } from './view/mission/mission.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { AnimalObservationComponent } from './view/observation/animal-observation/animal-observation.component';
import { ObservationActionComponent } from './view/observation/observation-action/observation-action.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomSerializer} from './app-store/shared/utils';
import { reducers, metaReducers } from './app-store';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { HomeComponent } from './view/home/home.component';
import {missionsReducer} from './app-store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    ZebraProfilComponent,
    DashboardComponent,
    ErrorPageComponent,
    MissionComponent,
    AnimalObservationComponent,
    ObservationActionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    AppRoutingModule,
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
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature('missions', missionsReducer),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'})
  ],
  providers: [
    MatDatepickerModule,
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
