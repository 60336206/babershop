import {
  RequestBuilder
} from "./chunk-LXYPTV7U.js";
import {
  HttpResponse,
  filter,
  map
} from "./chunk-JJSRJYGA.js";

// src/app/api/fn/operations/apiauthlogin.ts
function apiauthlogin(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, apiauthlogin.PATH, "post");
  if (params) {
    rb.body(params.body, "application/json");
  }
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
apiauthlogin.PATH = "/auth/login";

// src/app/api/fn/operations/apiusergetall.ts
function apiusergetall(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, apiusergetall.PATH, "get");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
apiusergetall.PATH = "/user/getall";

// src/app/api/fn/operations/apicustomergetall.ts
function apicustomergetall(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, apicustomergetall.PATH, "get");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
apicustomergetall.PATH = "/customer/getall";

// src/app/api/fn/operations/apicustomerinsert.ts
function apicustomerinsert(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, apicustomerinsert.PATH, "post");
  if (params) {
    rb.body(params.body, "application/json");
  }
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
apicustomerinsert.PATH = "/customer/insert";

// src/app/api/fn/operations/apiservicegetall.ts
function apiservicegetall(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, apiservicegetall.PATH, "get");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
apiservicegetall.PATH = "/service/getall";

// src/app/api/fn/operations/apiappointmentgetall.ts
function apiappointmentgetall(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, apiappointmentgetall.PATH, "get");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
apiappointmentgetall.PATH = "/appointment/getall";

// src/app/api/fn/operations/apiappointmentinsert.ts
function apiappointmentinsert(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, apiappointmentinsert.PATH, "post");
  if (params) {
    rb.body(params.body, "application/json");
  }
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
apiappointmentinsert.PATH = "/appointment/insert";

// src/app/api/fn/operations/apiappointmentuploadimage.ts
function apiappointmentuploadimage(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, `/appointment/upload-image/${params.idAppointment}`, "post");
  if (params) {
    rb.body(params.body, "multipart/form-data");
  }
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
apiappointmentuploadimage.PATH = "/appointment/upload-image";

// src/app/api/fn/operations/apiappointmentgetfiles.ts
function apiappointmentgetfiles(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, `/appointment/getfiles/${params.idAppointment}`, "get");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
apiappointmentgetfiles.PATH = "/appointment/getfiles";

// src/app/api/fn/operations/apisettinggetone.ts
function apisettinggetone(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, apisettinggetone.PATH, "get");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
apisettinggetone.PATH = "/setting/getone";

// src/app/api/fn/operations/apigallerygetall.ts
function apigallerygetall(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, apigallerygetall.PATH, "get");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
apigallerygetall.PATH = "/gallery/getall";

// src/app/api/fn/operations/apiuserinsert.ts
function apiuserinsert(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, apiuserinsert.PATH, "post");
  if (params) {
    rb.body(params.body, "application/json");
  }
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
apiuserinsert.PATH = "/user/insert";

// src/app/api/fn/operations/apiuserupdate.ts
function apiuserupdate(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, apiuserupdate.PATH, "put");
  if (params) {
    rb.body(params.body, "application/json");
  }
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
apiuserupdate.PATH = "/user/update";

// src/app/api/fn/operations/apiuserdelete.ts
function apiuserdelete(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, `/user/delete/${params.idUser}`, "delete");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
apiuserdelete.PATH = "/user/delete";

// src/app/api/fn/operations/apicustomerupdate.ts
function apicustomerupdate(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, apicustomerupdate.PATH, "put");
  if (params) {
    rb.body(params.body, "application/json");
  }
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
apicustomerupdate.PATH = "/customer/update";

// src/app/api/fn/operations/apicustomerdelete.ts
function apicustomerdelete(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, `/customer/delete/${params.idCustomer}`, "delete");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
apicustomerdelete.PATH = "/customer/delete";

// src/app/api/fn/operations/apiserviceinsert.ts
function apiserviceinsert(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, apiserviceinsert.PATH, "post");
  if (params) {
    rb.body(params.body, "application/json");
  }
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
apiserviceinsert.PATH = "/service/insert";

// src/app/api/fn/operations/apiserviceupdate.ts
function apiserviceupdate(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, apiserviceupdate.PATH, "put");
  if (params) {
    rb.body(params.body, "application/json");
  }
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
apiserviceupdate.PATH = "/service/update";

// src/app/api/fn/operations/apiservicedelete.ts
function apiservicedelete(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, `/service/delete/${params.idService}`, "delete");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
apiservicedelete.PATH = "/service/delete";

// src/app/api/fn/operations/apiappointmentupdate.ts
function apiappointmentupdate(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, apiappointmentupdate.PATH, "put");
  if (params) {
    rb.body(params.body, "application/json");
  }
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
apiappointmentupdate.PATH = "/appointment/update";

// src/app/api/fn/operations/apiappointmentdelete.ts
function apiappointmentdelete(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, `/appointment/delete/${params.idAppointment}`, "delete");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
apiappointmentdelete.PATH = "/appointment/delete";

export {
  apiauthlogin,
  apiusergetall,
  apicustomergetall,
  apicustomerinsert,
  apiservicegetall,
  apiappointmentgetall,
  apiappointmentinsert,
  apiappointmentuploadimage,
  apiappointmentgetfiles,
  apisettinggetone,
  apigallerygetall
};
//# sourceMappingURL=chunk-U4NY7MLH.js.map
