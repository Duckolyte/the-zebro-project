import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AnimalListComponent } from './shared/view/animal-list/animal-list.component';
import { ZebraProfilComponent } from './shared/view/zebra-profil/zebra-profil.component';
import { DashboardComponent } from './shared/page/dashboard/dashboard.component';
import { AppRoutingModule } from './shared/app-routing/app-routing.module';
import { ErrorPageComponent } from './shared/page/error-page/error-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatCardModule,
  MatDatepickerModule,
} from '@angular/material';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomSerializer} from './shared/app-store/shared/utils';
import { reducers, metaReducers } from './shared/app-store';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import { MissionsModule } from './missions/missions.module';
import { ObservationActionsModule } from './observation-actions/observation-actions.module';
import { AnimalObservationsModule } from './animal-observations/animal-observations.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    ZebraProfilComponent,
    DashboardComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    FormsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    SharedModule,
    MissionsModule,
    ObservationActionsModule,
    AnimalObservationsModule
  ],
  providers: [
    MatDatepickerModule,
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
