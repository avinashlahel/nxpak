import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NxpakCoreComponent} from './nxpak-core.component';
import {LayoutModule} from "@angular/cdk/layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NxpakNavComponent} from "./navigation/components/nxpak-nav/nxpak-nav.component";
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import { PolicyRatingHomeComponent } from './components/policy-rating-home/policy-rating-home.component';
import {MatRippleModule} from "@angular/material/core";

const routes: Routes = [
  {
    path: '',
    component: NxpakCoreComponent,
    children: [
      {
        path: 'mappa',
        loadChildren: () => import('./../group-lines/mappa/mappa.module').then(m => m.MappaModule)
      },
      {
        path: "policy-rating",
        component: PolicyRatingHomeComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: "/"
  }
]

@NgModule({
  declarations: [
    NxpakCoreComponent,
    NxpakNavComponent,
    PolicyRatingHomeComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    MatRippleModule
  ]
})
export class NxpakCoreModule {
}
