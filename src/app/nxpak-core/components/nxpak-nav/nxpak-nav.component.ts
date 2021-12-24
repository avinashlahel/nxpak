import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {SpinnerService} from "../../services/spinner.service";

@Component({
  selector: 'nxpak-nav',
  templateUrl: './nxpak-nav.component.html',
  styleUrls: ['./nxpak-nav.component.scss']
})
export class NxpakNavComponent implements OnInit {

  displayProgressSpinner = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private spinnerService: SpinnerService) {
  }

  public ngOnInit(): void {
    this.spinnerService.spinnerObserver$
      .subscribe(val => this.displayProgressSpinner = val);
  }

}
