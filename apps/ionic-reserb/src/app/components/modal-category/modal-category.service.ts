import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from '@reserb-app/core';
import { CategoriesService } from '@reserb-app/core/services/api';

@Injectable()
export class ModalCategoryService extends BaseService {

  categories$: Subject<any> = new Subject<any> ();

  constructor(private readonly categoriesService: CategoriesService) {
    super();
  }

  callCategoriesService(): void {
    let category: Observable<any>;
    category= this.categoriesService.categories();
    category
      .pipe(
        map((data) => {
          this.categories$.next(data);
        }),
        catchError((error) => of(error))
      )
      .subscribe(() => {})
  }

}
