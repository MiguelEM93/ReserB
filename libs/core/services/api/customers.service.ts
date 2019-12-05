import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../base';

@Injectable()
export class CustomersService {
  constructor(private readonly apiService: ApiService) {}

  createCustomer(request): Observable<any> {
    return this.apiService.post(`/customer`, request);
  }

}
