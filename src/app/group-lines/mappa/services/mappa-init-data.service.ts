import {Injectable} from '@angular/core';
import {Agency} from "../models/common-model";

@Injectable()
export class MappaInitDataService {

  constructor() {
  }

  public getAgencies(): Agency[] {
    return [
      {
        number: '20009',
        name: '20009 - BATES INSURANCE AGENCY IN'
      }, {
        number: '20012',
        name: '20012 - BRYDEN & SULLIVAN INS AGC'
      }, {
        number: '20015',
        name: '20015 - BRIAN MCMAHON INS. SERVIC'
      }, {
        number: '20017',
        name: '20017 - LEWIS P BITHER INS AGCY I'
      }, {
        number: '20019',
        name: '20019 - RALPH J. GALANTE INSURANC'
      }, {
        number: '20017',
        name: '20017 - LEWIS P BITHER INS AGCY I'
      }, {
        number: '20019',
        name: '20019 - RALPH J. GALANTE INSURANC'
      }, {
        number: '20017',
        name: '20017 - LEWIS P BITHER INS AGCY I'
      }, {
        number: '20019',
        name: '20019 - RALPH J. GALANTE INSURANC'
      }];
  }
}
