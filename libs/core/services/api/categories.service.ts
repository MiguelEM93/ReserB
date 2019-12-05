import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../base';

@Injectable()
export class CategoriesService {
  constructor(private readonly apiService: ApiService) {}

  categories(): Observable<any> {
    return this.apiService.get(`/Category/5da1652d1f09ca1768324ff3`);
  }

  locales(category): Observable<any> {
    return this.apiService.get(`/Space/category/${category}`);
  }

}
