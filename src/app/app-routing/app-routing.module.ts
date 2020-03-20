import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ZebraProfilComponent} from '../view/zebra-profil/zebra-profil.component';
import {AnimalListComponent} from '../view/animal-list/animal-list.component';
import {ErrorPageComponent} from '../page/error-page/error-page.component';
import {MissionComponent} from '../view/mission/mission.component';
import {AnimalObservationComponent} from '../view/observation/animal-observation/animal-observation.component';
import {ObservationActionComponent} from '../view/observation/observation-action/observation-action.component';
import {MissionResolver} from '../service/observation-mission.resolver';
import {HomeComponent} from '../view/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'mission',
    component: MissionComponent,
  },
  {
    path: 'mission/:id',
    component: MissionComponent,
    resolve: {
      course: MissionResolver
    }
  },
  {
    path: 'animal-observation',
    component: AnimalObservationComponent,
  },
  {
    path: 'observation-action',
    component: ObservationActionComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
