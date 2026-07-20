import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

export interface ApiappointmentuploadimageParams {
  idAppointment: string;
  body: {
    file: File;
  };
}

export function apiappointmentuploadimage(http: HttpClient, rootUrl: string, params: ApiappointmentuploadimageParams, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, `/appointment/upload-image/${params.idAppointment}`, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }
  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}

apiappointmentuploadimage.PATH = '/appointment/upload-image';
