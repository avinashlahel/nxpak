import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable, startWith} from "rxjs";
import {map} from "rxjs/operators";
import {MappaInitDataService} from "../../services/mappa-init-data.service";
import {Agency} from "../../models/common-model";
import {MatAutocompleteTrigger} from "@angular/material/autocomplete";

@Component({
  selector: 'nx-mappa-policy-info',
  templateUrl: './mappa-policy-info.component.html',
  styleUrls: ['./mappa-policy-info.component.scss']
})
export class MappaPolicyInfoComponent implements OnInit {

  // Form Control Constants
  AGENCY_NUMBER = 'agencyNumber';
  POLICY_EFF_DATE = 'polEffDate';
  WITH_AGENT_FROM = 'withAgentFrom';
  OLD_POLICY_REWRITE = 'oldPolicyRewrite';
  DSP_CODE = 'dspCode';
  PAPERLESS = 'paperless';
  // Validator Constants
  NOT_FROM_DROP_DOWN = 'notfromdropdown';
  REQUIRED = 'required';


  minPolEffDate: any = new Date();
  agencyNumbers: Agency[] = [];
  agenciesObservable: Observable<Agency[]> | undefined;
  formGroup: FormGroup;

  @ViewChild('agencyNumberInput', {read: MatAutocompleteTrigger})
  private autoComplete: MatAutocompleteTrigger;

  public constructor(
    private fb: FormBuilder,
    private initDataService: MappaInitDataService
  ) {
    this.createFormGroup();
  }

  public ngOnInit(): void {
    this.agencyNumbers = this.initDataService.getAgencies();
    this.setUpObservables();
  }


  private createFormGroup(): void {
    let controls = {};
    controls[this.POLICY_EFF_DATE] = ['', Validators.required];
    controls[this.AGENCY_NUMBER] = ['', Validators.required];
    controls[this.WITH_AGENT_FROM] = ['', Validators.required];
    controls[this.OLD_POLICY_REWRITE] = [''];
    controls[this.DSP_CODE] = [''];
    controls[this.PAPERLESS] = [''];

    this.formGroup = this.fb.group(controls);
  }

  private setUpObservables(): void {
    this.agenciesObservable =
      this.formGroup.get(this.AGENCY_NUMBER).valueChanges.pipe(
        startWith(''),
        map(value => (typeof value === 'string' ? value : value.name)),
        map(name => (name ? this._filter(name) : this.agencyNumbers.slice())),
      );
  }

  public submitForm(): void {
    this.formGroup.markAllAsTouched();
    this.validateFormFieldsBeforeSubmit();
    if (this.formGroup.invalid) {
      return;
    }
    console.log(this.formGroup);
  }

  private validateFormFieldsBeforeSubmit(): void {
    let selectedAgency = this.formGroup.get(this.AGENCY_NUMBER).value;
    if (!this.agencyNumbers.find(elm => elm === selectedAgency)) {
      let errorObj = {};
      errorObj[this.NOT_FROM_DROP_DOWN] = true;
      this.formGroup.get(this.AGENCY_NUMBER).setErrors(errorObj);
      return;
    }
  }

  private _filter(value: string): Agency[] {
    const filterValue = value.toLowerCase();
    return this.agencyNumbers
      .filter(option => option.name.toLowerCase().includes(filterValue));
  }

  public displayOption(option: Agency): any {
    return option && option.name ? option.name : '';
  }

  public clearAndOpenPanel(): void {
    this.formGroup.get(this.AGENCY_NUMBER).reset('');
    setTimeout(() => this.autoComplete.openPanel(), 0);
  }

  public resetControl(control: string): void {
    this.formGroup.get(control).reset('');
  }

  public hasError(control: string, validator: string): boolean {
    return this.formGroup.get(control).hasError(validator);
  }


}
