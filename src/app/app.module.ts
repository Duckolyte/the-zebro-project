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

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    ZebraProfilComponent,
    DashboardComponent,
    ErrorPageComponent,
    MissionComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
