import {Injectable} from '@angular/core';
import {Agency} from "../models/common-model";

@Injectable()
export class MappaInitDataService {

  constructor() {
  }

  public getAgencies(): Agency[] {
    return [
      {
        number: '12345',
        name: '12345 - Lorem ipsum dolor sit '
      }, {
        number: '54321',
        name: '54321 - Duis aute irure dolor'
      }, {
        number: '87655',
        name: '87655 - consectetur adipisicing elit'
      }, {
        number: '12349',
        name: '12349 - Excepteur sint occaecat cupidatat'
      }, {
        number: '09823',
        name: '09823 - Lorem ipsum dolor sit'
      }, {
        number: '08643',
        name: '08643 - mollit anim id est laborum.'
      }, {
        number: '18473',
        name: '18473 - incididunt ut labore et dolore'
      }, {
        number: '15278',
        name: '15278 - consectetur adipisicing elit'
      }, {
        number: '74289',
        name: '74289 - reprehenderit in voluptate velit esse12345'
      }];
  }
}
