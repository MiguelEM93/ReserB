import { Injectable } from '@angular/core';
import { BaseService } from '@reserb-app/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthorizationService } from '@reserb-app/core/services/api';

@Injectable()
export class LoginService extends BaseService {

  customers$: Subject<any> = new Subject<any> ();
  login$: Subject<any> = new Subject<any>();

  constructor(private readonly authorizationService: AuthorizationService) {
    super();
  }

  callCusotomersService(): void {
    let customer: Observable<any>;
    customer= this.authorizationService.getCustomers();
    customer
      .pipe(
        map((data) => {
          this.customers$.next(data);
        }),
        catchError((error) => of(error))
      )
      .subscribe(() => {})
  }

  callLoginService(request): void {
    let credentials: Observable<any>;
    credentials= this.authorizationService.authentication(request);
    credentials
      .pipe(
        map((data) => {
          this.login$.next(data);
        }),
        catchError((error) => of(error))
      )
      .subscribe(() => {})
  }

}
