import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-mappa-policy-info',
  templateUrl: './mappa-policy-info.component.html',
  styleUrls: ['./mappa-policy-info.component.scss']
})
export class MappaPolicyInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(polForm: NgForm) {
    console.log(polForm);
  }
}
