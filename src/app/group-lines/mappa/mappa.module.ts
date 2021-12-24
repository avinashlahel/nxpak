import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MappaComponent} from './mappa.component';
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {ExtendedModule, FlexModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MappaPolicyInfoComponent} from './components/mappa-policy-info/mappa-policy-info.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MappaInitDataService} from "./services/mappa-init-data.service";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../shared/shared.module";
import {MappaInsuredInfoComponent} from './components/mappa-insuerd-info/mappa-insured-info.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatExpansionModule} from "@angular/material/expansion";

const routes: Routes = [
  {
    path: '',
    component: MappaComponent,
    children: [
      {
        path: 'policy-info',
        component: MappaPolicyInfoComponent
      },
      {
        path: 'insured-info',
        component: MappaInsuredInfoComponent
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
    MappaPolicyInfoComponent,
    MappaInsuredInfoComponent
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatIconModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatRadioModule,
    ExtendedModule,
    MatExpansionModule,
  ],
  providers: [
    MappaInitDataService
  ]
})
export class MappaModule {
}
