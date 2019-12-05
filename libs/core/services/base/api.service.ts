import { HttpClient, HttpClientModule, HttpEventType, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

// import { UploadServiceInterface } from '@nexbie/features/shared';
import { environment } from '@reserb-app/core';

@Injectable()
export class ApiService {
  constructor(protected http: HttpClient) {}

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { params });
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${environment.api_url}${path}`, JSON.stringify(body));
  }

  post(path: string, body: Object = {}, options?: any): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`, body, options);
  }

  delete(path: string): Observable<any> {
    return this.http.delete(`${environment.api_url}${path}`);
  }

  // upload(path: string, files: any[]): { [key: string]: Observable<number> } {
  //   const status = {};
  //
  //   files = files.filter((item, _) => item.completed === false);
  //   files.forEach((item) => {
  //     const formData: FormData = new FormData();
  //     const file = item.file;
  //
  //     formData.append('file', file, encodeURI(file.name));
  //     // formData.append('file', file);
  //
  //     const req = this.http.post(`${environment.api_url}${path}`, formData, {
  //       headers: {
  //         Accept: '*/*',
  //         charset: 'UTF-8',
  //         'Content-Type': 'none',
  //       },
  //       observe: 'events',
  //       reportProgress: true,
  //     });
  //
  //     const progress = new Subject<UploadServiceInterface>();
  //
  //     req
  //       .pipe(
  //         catchError((error) =>
  //           of(
  //             progress.next({
  //               percentDone: 'error',
  //               response: error,
  //             })
  //           )
  //         )
  //       )
  //       .subscribe((event: any) => {
  //         if (event && event.type === HttpEventType.UploadProgress) {
  //           const objectResponse: UploadServiceInterface = {
  //             percentDone: Math.round((100 * event.loaded) / event.total),
  //             response: null,
  //           };
  //           progress.next(objectResponse);
  //         } else if (event instanceof HttpResponse) {
  //           const objectResponse: UploadServiceInterface = {
  //             percentDone: 100,
  //             response: event.body,
  //           };
  //           progress.next(objectResponse);
  //           progress.complete();
  //         }
  //       });
  //
  //     status[item.file.name] = {
  //       progress: progress.asObservable(),
  //     };
  //   });
  //
  //   return status;
  // }
}
