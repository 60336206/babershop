import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

export interface ApiserviceupdateParams {
  body: {
    idService: string;
    name: string;
    description: string;
    price: number;
    durationMinutes: number;
    image: string;
  };
}

export function apiserviceupdate(http: HttpClient, rootUrl: string, params: ApiserviceupdateParams, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, apiserviceupdate.PATH, 'put');
  if (params) { rb.body(params.body, 'application/json'); }
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}
apiserviceupdate.PATH = '/service/update';