import {Component, OnInit} from '@angular/core';

@Component({
  template: `
    <nxpak-nav>
      <router-outlet></router-outlet>
    </nxpak-nav>
  `,
})
export class NxpakCoreComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
