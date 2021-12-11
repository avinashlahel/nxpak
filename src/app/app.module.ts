import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'nxpak',
    loadChildren: () => import('./nxpak-core/nxpak-core.module').then(m => m.NxpakCoreModule)
  },
  {
    path: '',
    redirectTo: "nxpak",
    pathMatch: "full"
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
