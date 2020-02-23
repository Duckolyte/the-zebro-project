import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ZebraProfilComponent} from '../view/zebra-profil/zebra-profil.component';
import {AnimalListComponent} from '../view/animal-list/animal-list.component';
import {ErrorPageComponent} from '../page/error-page/error-page.component';
import {MissionComponent} from '../view/mission/mission.component';
import {AnimalObservationComponent} from '../view/observation/animal-observation/animal-observation.component';
import {ObservationActionComponent} from '../view/observation/observation-action/observation-action.component';

const routes: Routes = [
  {
    path: 'mission',
    component: MissionComponent,
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
    path: 'animals',
    component: AnimalListComponent,
  },
  {
    path: 'zebra/:zebraId',
    component: ZebraProfilComponent
  },
  {
    path: 'zebra/create',
    component: ZebraProfilComponent
  },
  {
    path: 'zebra/edit/:zebraId',
    component: ZebraProfilComponent
  },
  {
    path: '',
    redirectTo: '/mission',
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
