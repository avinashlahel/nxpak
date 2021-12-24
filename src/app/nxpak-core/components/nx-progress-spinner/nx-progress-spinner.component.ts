import {Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {ProgressSpinnerMode} from "@angular/material/progress-spinner";
import {OverlayConfig, OverlayRef} from "@angular/cdk/overlay";
import {OverlayService} from "../../services/overlay.service";

@Component({
  selector: 'nx-progress-spinner',
  templateUrl: './nx-progress-spinner.component.html'
})
export class NxProgressSpinnerComponent implements OnInit {

  @Input() color?: ThemePalette = 'primary';
  @Input() value?: number;
  @Input() mode?: ProgressSpinnerMode = 'indeterminate';
  @Input() diameter?: number = 70;
  @Input() strokeWidth?: number;
  @Input() backdropEnabled = true;
  @Input() positionGloballyCenter = true;
  @Input() displayProgressSpinner: boolean;

  @ViewChild('progressSpinnerRef')
  private progressSpinnerRef: TemplateRef<any>;
  private progressSpinnerOverlayConfig: OverlayConfig;
  private overlayRef: OverlayRef;

  constructor(private vcRef: ViewContainerRef, private overlayService: OverlayService) {
  }

  public ngOnInit(): void {
    // Config for Overlay Service
    this.progressSpinnerOverlayConfig = {
      hasBackdrop: this.backdropEnabled
    };
    if (this.positionGloballyCenter) {
      this.progressSpinnerOverlayConfig['positionStrategy'] = this.overlayService.positionGloballyCenter();
    }
    this.overlayRef = this.overlayService.createOverlay(this.progressSpinnerOverlayConfig);
  }

  public ngDoCheck() {
    // Based on status of displayProgressSpinner attach/detach overlay to progress spinner template
    if (this.displayProgressSpinner && !this.overlayRef.hasAttached() && this.progressSpinnerRef) {
      this.overlayService.attachTemplatePortal(this.overlayRef, this.progressSpinnerRef, this.vcRef);
    } else if (!this.displayProgressSpinner && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }

}
