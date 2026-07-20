import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SkeletonModule } from 'primeng/skeleton';
import { MessageService } from 'primeng/api';

import { Api } from '../../api/api';
import {
  apiusergetall,
  apicustomergetall,
  apiservicegetall,
  apiappointmentgetall
} from '../../api/functions';
import { AuthService } from '../../observable/auth/auth.service';

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../api/strict-http-response';
import { RequestBuilder } from '../../api/request-builder';

function apiappointmentgetbybarber(http: HttpClient, rootUrl: string, params: { idUser: string }, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, `/appointment/getbybarber/${params.idUser}`, 'get');
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}

interface StatCard {
  title: string;
  value: number | string;
  icon: string;
  color: string;
  bg: string;
  suffix?: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    CardModule,
    TagModule,
    ProgressSpinnerModule,
    SkeletonModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  private readonly api            = inject(Api);
  private readonly authService    = inject(AuthService);
  private readonly messageService = inject(MessageService);
  private readonly cdr            = inject(ChangeDetectorRef);

  user = this.authService.getUser();

  stats: StatCard[] = [
    { title: 'Barberos',     value: 0, icon: 'pi-user',     color: 'text-blue-600',   bg: 'bg-blue-50'   },
    { title: 'Clientes',     value: 0, icon: 'pi-users',    color: 'text-green-600',  bg: 'bg-green-50'  },
    { title: 'Servicios',    value: 0, icon: 'pi-tag',      color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: 'Reservas hoy', value: 0, icon: 'pi-calendar', color: 'text-amber-600',  bg: 'bg-amber-50'  },
    { title: 'Ingresos hoy', value: 0, icon: 'pi-money-bill', color: 'text-emerald-600', bg: 'bg-emerald-50', suffix: 'S/' },
  ];

  loadingStats = true;
  recentAppointments: any[] = [];
  todayStr = new Date().toLocaleDateString('es-PE', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  ngOnInit(): void {
    this.loadStats();
  }

  private loadStats(): void {
    const today = new Date().toISOString().split('T')[0];
    const isBarber = this.user?.role === 'BARBER';

    let requests: Promise<any>[];

    if (isBarber) {
      requests = [
        Promise.resolve({ listUser: [] }),
        Promise.resolve({ listCustomer: [] }),
        Promise.resolve({ listService: [] }),
        this.api.invoke(apiappointmentgetbybarber, { idUser: this.user?.idUser ?? '' })
      ];
    } else {
      requests = [
        this.api.invoke(apiusergetall),
        this.api.invoke(apicustomergetall),
        this.api.invoke(apiservicegetall),
        this.api.invoke(apiappointmentgetall)
      ];
    }

    Promise.all(requests).then(([users, customers, services, appointments]) => {
      const parse = (r: any, key: string) => {
        const d = typeof r === 'string' ? JSON.parse(r) : r;
        return d?.[key] ?? [];
      };

      const userList        = parse(users, 'listUser');
      const customerList    = parse(customers, 'listCustomer');
      const serviceList     = parse(services, 'listService');
      const appointmentList = parse(appointments, 'listAppointment');

      const barbers           = userList.filter((u: any) => u.role === 'BARBER' && u.status === 1);
      const todayAppointments = appointmentList.filter((a: any) => a.appointmentDate === today);
      const todayRevenue      = todayAppointments
        .filter((a: any) => a.status === 'Finalizada')
        .reduce((sum: number, a: any) => sum + Number(a.total ?? 0), 0);

      this.stats[0].value = isBarber ? '-' : barbers.length;
      this.stats[1].value = isBarber ? '-' : customerList.filter((c: any) => c.status === 1).length;
      this.stats[2].value = isBarber ? '-' : serviceList.filter((s: any) => s.status === 1).length;
      this.stats[3].value = todayAppointments.length;
      this.stats[4].value = todayRevenue.toFixed(2);

      this.recentAppointments = [...appointmentList]
        .sort((a: any, b: any) => new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime())
        .slice(0, 6);

      this.loadingStats = false;
      this.cdr.detectChanges();
    }).catch(() => {
      this.loadingStats = false;
      this.messageService.add({ severity: 'warn', summary: 'Aviso', detail: 'No se pudieron cargar todas las estadísticas.' });
    });
  }

  getStatusSeverity(status: string): 'success' | 'warn' | 'danger' | 'info' | 'secondary' {
    switch (status) {
      case 'Confirmada': return 'success';
      case 'Pendiente':  return 'warn';
      case 'Cancelada':  return 'danger';
      case 'Finalizada': return 'info';
      default:           return 'secondary';
    }
  }
}
