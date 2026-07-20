import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

export interface ApiuserinsertParams {
  body: {
    firstName: string;
    surName: string;
    email: string;
    password: string;
    role: string;
    photo: string;
  };
}

export function apiuserinsert(http: HttpClient, rootUrl: string, params: ApiuserinsertParams, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, apiuserinsert.PATH, 'post');
  if (params) { rb.body(params.body, 'application/json'); }
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}
apiuserinsert.PATH = '/user/insert';