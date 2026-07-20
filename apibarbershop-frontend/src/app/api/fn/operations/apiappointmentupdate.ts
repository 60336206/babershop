import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

export interface ApiappointmentupdateParams {
  body: {
    idAppointment: string;
    appointmentDate: string;
    startHour: string;
    endHour: string;
    status: string;
    observation: string;
  };
}

export function apiappointmentupdate(http: HttpClient, rootUrl: string, params: ApiappointmentupdateParams, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, apiappointmentupdate.PATH, 'put');
  if (params) { rb.body(params.body, 'application/json'); }
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}
apiappointmentupdate.PATH = '/appointment/update';