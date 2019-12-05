import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../base';

@Injectable()
export class AuthorizationService {
  constructor(private readonly apiService: ApiService) {}

  getCustomers(): Observable<any> {
    return this.apiService.get(`/customer`);
  }

  authentication(request): Observable<any> {
    return this.apiService.post(`/login`, request);
  }

}
