import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private spinnerSubject = new BehaviorSubject(false);
  public spinnerObserver$ = this.spinnerSubject.asObservable();

  constructor() { }

  public showSpinner(): void {
    this.spinnerSubject.next(true);
  }

  public hideSpinner(): void {
    this.spinnerSubject.next(false);
  }
}
