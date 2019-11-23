import { Injectable } from '@angular/core';
import { BaseService } from '@reserb-app/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CustomersService } from '@reserb-app/core/services/api/customers.service';

@Injectable()
export class SignupService extends BaseService {

  createCustomer$: Subject<any> = new Subject<any>();

    constructor(private customersService: CustomersService){
      super();
    }

    callCreateCustomerService(request): void {
      let customer: Observable<any>;
      customer= this.customersService.createCustomer(request);
      customer
        .pipe(
          map((data) => {
            this.createCustomer$.next(data);
          }),
          catchError((error) => of(error))
        )
        .subscribe(() => {})
    }

}
