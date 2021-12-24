import {Component, OnInit} from '@angular/core';

@Component({
  template: `
    <mat-toolbar ngClass.gt-xs="margin-gt-xs" color="primary" fxLayout="row" fxLayoutAlign="center center">
      <h1 class="mat-headline">Private Passenger Auto - MA</h1>
    </mat-toolbar>
    <router-outlet></router-outlet>`,
  styles: [`
    :host {
      display: block;
    }

    .margin-gt-xs {
      margin-bottom: 2rem;
    }
  `]
})
export class MappaComponent {
  constructor() {
  }
}
