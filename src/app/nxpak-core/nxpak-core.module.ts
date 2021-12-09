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


@NgModule({
  declarations: [
    NxpakCoreComponent, NxpakNavComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
  ]
})
export class NxpakCoreModule {
}
