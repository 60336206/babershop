import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

export interface ApiappointmentinsertParams {
  body: {
    idCustomer: string;
    idUser: string;
    appointmentDate: string;
    startHour: string;
    endHour: string;
    total: number;
    observation: string;
    details: { idService: string; price: number }[];
  };
}

export function apiappointmentinsert(http: HttpClient, rootUrl: string, params: ApiappointmentinsertParams, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, apiappointmentinsert.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }
  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}

apiappointmentinsert.PATH = '/appointment/insert';