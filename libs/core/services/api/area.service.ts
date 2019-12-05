import { Injectable } from '@angular/core';
import { ApiService } from '../base';
import { Observable } from 'rxjs';

@Injectable()
export class AreaService {

  constructor(private apiService: ApiService){}

  getArea(): Observable<any> {
    return this.apiService.get(`/Sector`);
  }

}
