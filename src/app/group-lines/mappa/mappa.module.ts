import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MappaComponent} from './mappa.component';
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {FlexModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MappaPolicyInfoComponent} from './components/mappa-policy-info/mappa-policy-info.component';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: MappaComponent,
    children: [
      {
        path: 'pol-info',
        component: MappaPolicyInfoComponent
      }
    ]
  },
  {
    path: '**',
    component: MappaComponent
  }
]

@NgModule({
  declarations: [
    MappaComponent,
    MappaPolicyInfoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    FlexModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class MappaModule {
}
