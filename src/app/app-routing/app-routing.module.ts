import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ZebraProfilComponent} from '../view/zebra-profil/zebra-profil.component';
import {AnimalListComponent} from '../view/animal-list/animal-list.component';
import {ErrorPageComponent} from '../page/error-page/error-page.component';

const routes: Routes = [
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
    redirectTo: '/animals',
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
