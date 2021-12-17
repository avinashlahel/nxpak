import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

interface LOB {
  name: string,
  icon: string,
  route: string
}

@Component({
  selector: 'nx-policy-rating-home',
  templateUrl: './policy-rating-home.component.html',
  styleUrls: ['./policy-rating-home.component.scss']
})
export class PolicyRatingHomeComponent implements OnInit {

  lobs: LOB[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.lobs = [
      {
        name: 'Private Passenger Auto',
        icon: 'directions_car',
        route: '/nxpak/mappa/policy-info'
      },
      {
        name: 'Homeowners',
        icon: 'home',
        route: '/nxpak/mappa/policy-info'
      },
      {
        name: 'Compak',
        icon: 'home_work',
        route: '/nxpak/mappa/policy-info'
      },
      {
        name: 'Workpak',
        icon: 'location_city',
        route: '/nxpak/mappa/policy-info'
      }
    ]
  }

  goToLob(lob: LOB) {
    this.router.navigate([lob.route]);
  }
}
