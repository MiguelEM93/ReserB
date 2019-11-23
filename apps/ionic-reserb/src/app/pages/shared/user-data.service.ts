import { Injectable } from '@angular/core';
import { BaseService } from '@reserb-app/core';

@Injectable()
export class UserDataService extends BaseService {

  userData = {};

  constructor() {
    super();
  }

}
