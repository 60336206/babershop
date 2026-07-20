import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

export interface ApicustomerupdateParams {
  body: {
    idCustomer: string;
    firstName: string;
    surName: string;
    phone: string;
    email: string;
  };
}

export function apicustomerupdate(http: HttpClient, rootUrl: string, params: ApicustomerupdateParams, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, apicustomerupdate.PATH, 'put');
  if (params) { rb.body(params.body, 'application/json'); }
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}
apicustomerupdate.PATH = '/customer/update';