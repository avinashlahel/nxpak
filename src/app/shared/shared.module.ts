import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NxFormLayoutComponent} from './layout/components/nx-form-layout/nx-form-layout.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    NxFormLayoutComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    NxFormLayoutComponent,
  ]
})
export class SharedModule {
}
