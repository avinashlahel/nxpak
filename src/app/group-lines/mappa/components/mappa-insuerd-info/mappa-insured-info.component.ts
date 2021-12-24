import { Component, OnInit } from '@angular/core';
import {MediaObserver} from "@angular/flex-layout";

@Component({
  selector: 'nx-mappa-insured-info',
  templateUrl: './mappa-insured-info.component.html',
  styleUrls: ['./mappa-insured-info.component.scss']
})
export class MappaInsuredInfoComponent implements OnInit {

  constructor(public media: MediaObserver) { }

  ngOnInit(): void {
  }

}
