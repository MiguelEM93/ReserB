import { Injectable } from '@angular/core';
import { BaseService } from '@reserb-app/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AreaService } from '@reserb-app/core/services/api';

@Injectable()
export class Tab2Service extends BaseService{

  areasService$: Subject<any> = new Subject<any>();

  constructor(protected areaService: AreaService){
    super();
  }

  callAreasService(): void {
    let areas: Observable<any>;
    areas = this.areaService.getArea();
    areas
      .pipe(
        map((data) => {
          this.areasService$.next(data);
        }),
        catchError((error) => of(error))
      )
      .subscribe(() => {})
  }

}
