import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ZebraProfilComponent} from '../view/zebra-profil/zebra-profil.component';
import {AnimalListComponent} from '../view/animal-list/animal-list.component';
import {ErrorPageComponent} from '../page/error-page/error-page.component';
import {MissionComponent} from '../../missions/mission/mission.component';
import {AnimalObservationComponent} from '../../animal-observations/animal-observation/animal-observation.component';
import {ObservationActionComponent} from '../../observation-actions/observation-action/observation-action.component';
import {MissionResolver} from '../service/observation-mission.resolver';
import {HomeComponent} from '../../missions/home/home.component';

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
    path: 'missions/:id',
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
