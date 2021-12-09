import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MappaComponent } from './mappa.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: MappaComponent
  },
  {
    path: '**',
    component: MappaComponent
  }
]

@NgModule({
  declarations: [
    MappaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MappaModule { }
