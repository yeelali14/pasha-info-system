import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class MapAdapterService {

  constructor() { }
  public calculateDataDelta() {
    const state = [
      {
        id: 112,
        name: 'pasha'
      },
      {
        id: 211,
        name: 'pishpesh'
      },
      {
        id: 213,
        name: 'pasha'
      },
      {
        id: 214,
        name: 'ok'
      }
    ];
    const newData = [
      {
        id: 112,
        name: 'pasha bla bla'
      },
      {
        id: 211,
        name: 'pishpesh 7y76'
      },
      {
        id: 213,
        name: 'pasha'
      },
      {
        id: 214,
        name: 'ok'
      }
    ];
    const differences = newData.filter(item2 => {
      const item1 = state.find(item => item.id === item2.id);
      return item1 && !_.isEqual(item1, item2);
    });

    console.log(differences);
  }

}
