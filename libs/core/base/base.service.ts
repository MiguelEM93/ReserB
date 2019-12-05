import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export abstract class BaseService implements OnDestroy {
  destroy$: Subject<any> = new Subject();

  /** Handles the destroy event */
  protected destroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  /** Executes all the destroys actions */
  ngOnDestroy() {
    this.destroy();
  }
}
