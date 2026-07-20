import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Api } from '../../api/api';
import { apiusergetall } from '../../api/functions';
import { AuthService } from '../../observable/auth/auth.service';

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../api/strict-http-response';
import { RequestBuilder } from '../../api/request-builder';

// ── API Operations inline ──
function apibarberschedulegetbybarber(http: HttpClient, rootUrl: string, params: { idUser: string }, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, `/barberschedule/getbybarber/${params.idUser}`, 'get');
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}

function apibarberscheduleinsert(http: HttpClient, rootUrl: string, params: { body: any }, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, '/barberschedule/insert', 'post');
  rb.body(params.body, 'application/json');
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}

function apibarberscheduleupdate(http: HttpClient, rootUrl: string, params: { body: any }, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, '/barberschedule/update', 'put');
  rb.body(params.body, 'application/json');
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}

function apibarberscheduledelete(http: HttpClient, rootUrl: string, params: { idBarberSchedule: string }, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, `/barberschedule/delete/${params.idBarberSchedule}`, 'delete');
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}

@Component({
  selector: 'app-schedules',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    ToolbarModule,
    TooltipModule,
    SelectModule,
    TagModule,
    CardModule,
    InputTextModule
  ],
  templateUrl: './schedules.html',
  styleUrl: './schedules.css'
})
export class Schedules implements OnInit {
  private readonly api                 = inject(Api);
  private readonly formBuilder         = inject(FormBuilder);
  private readonly messageService      = inject(MessageService);
  private readonly confirmationService = inject(ConfirmationService);
  private readonly cdr                 = inject(ChangeDetectorRef);
  private readonly authService         = inject(AuthService);

  user = this.authService.getUser();

  listBarbers: any[] = [];
  selectedBarberId: string = '';
  loadingBarbers = false;
  loadingSchedules = false;

  daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  weeklySchedule: { dayName: string; schedule: any }[] = [];

  dialogVisible = false;
  isEditing = false;
  saving = false;

  frmSchedule: FormGroup;

  get startHourFb() { return this.frmSchedule.controls['startHour']; }
  get endHourFb()   { return this.frmSchedule.controls['endHour']; }
  get dayNameFb()   { return this.frmSchedule.controls['dayName']; }

  constructor() {
    this.frmSchedule = this.formBuilder.group({
      idBarberSchedule: [''],
      idUser:           [''],
      dayName:          ['', [Validators.required]],
      startHour:        ['', [Validators.required]],
      endHour:          ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadBarbers();
  }

  loadBarbers(): void {
    if (this.user?.role === 'BARBER') {
      // Si es un barbero, solo puede ver y editar su propio horario
      this.listBarbers = [this.user];
      this.selectedBarberId = this.user.idUser;
      this.loadSchedulesForBarber(this.selectedBarberId);
      return;
    }

    this.loadingBarbers = true;
    this.api.invoke(apiusergetall).then((response: any) => {
      const data = typeof response === 'string' ? JSON.parse(response) : response;
      const allUsers = data?.listUser ?? [];
      // Filtrar barberos y administradores que pueden tener horarios
      this.listBarbers = allUsers.filter((u: any) => 
        u.role === 'BARBER' || u.role === 'ADMIN'
      );
      if (this.listBarbers.length > 0) {
        this.selectedBarberId = this.listBarbers[0].idUser;
        this.loadSchedulesForBarber(this.selectedBarberId);
      }
      this.loadingBarbers = false;
      this.cdr.detectChanges();
    }).catch(() => {
      this.loadingBarbers = false;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar la lista de barberos.' });
    });
  }

  onBarberChange(idUser: string): void {
    this.selectedBarberId = idUser;
    this.loadSchedulesForBarber(idUser);
  }

  loadSchedulesForBarber(idUser: string): void {
    this.loadingSchedules = true;
    this.api.invoke(apibarberschedulegetbybarber, { idUser }).then((response: any) => {
      const data = typeof response === 'string' ? JSON.parse(response) : response;
      const schedules = data?.listBarberSchedule ?? [];
      this.mapWeeklySchedule(schedules);
      this.loadingSchedules = false;
      this.cdr.detectChanges();
    }).catch(() => {
      this.loadingSchedules = false;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar los horarios del barbero.' });
    });
  }

  mapWeeklySchedule(apiSchedules: any[]): void {
    this.weeklySchedule = this.daysOfWeek.map(day => {
      // Buscar horario activo para este día (insensible a mayúsculas/espacios y status válido)
      const sched = apiSchedules.find(s => {
        const dayMatch = s.dayName?.trim().toLowerCase() === day.trim().toLowerCase();
        const statusMatch = s.status !== 0; // Si es 1, null o undefined, lo consideramos activo
        return dayMatch && statusMatch;
      });
      return {
        dayName: day,
        schedule: sched || null
      };
    });
  }

  openAdd(dayName: string): void {
    this.isEditing = false;
    this.frmSchedule.reset({
      idBarberSchedule: '',
      idUser:           this.selectedBarberId,
      dayName:          dayName,
      startHour:        '09:00',
      endHour:          '18:00'
    });
    this.dialogVisible = true;
  }

  openEdit(sched: any): void {
    this.isEditing = true;
    this.frmSchedule.patchValue({
      idBarberSchedule: sched.idBarberSchedule,
      idUser:           sched.idUser,
      dayName:          sched.dayName,
      startHour:        sched.startHour.substring(0, 5), // extraer HH:mm
      endHour:          sched.endHour.substring(0, 5)    // extraer HH:mm
    });
    this.dialogVisible = true;
  }

  saveSchedule(): void {
    if (!this.frmSchedule.valid) {
      this.frmSchedule.markAllAsTouched();
      this.messageService.add({ severity: 'warn', summary: 'Atención', detail: 'Por favor complete todos los campos.' });
      return;
    }

    const val = this.frmSchedule.value;

    if (val.startHour >= val.endHour) {
      this.messageService.add({ severity: 'warn', summary: 'Atención', detail: 'La hora de inicio debe ser anterior a la hora de fin.' });
      return;
    }

    this.saving = true;

    // Formatear a HH:mm:ss para la base de datos (evitar duplicar los segundos)
    const startFormatted = val.startHour.length > 5 ? val.startHour.substring(0, 8) : val.startHour + ':00';
    const endFormatted = val.endHour.length > 5 ? val.endHour.substring(0, 8) : val.endHour + ':00';

    const fn = this.isEditing ? apibarberscheduleupdate : apibarberscheduleinsert;
    const body = this.isEditing
      ? { idBarberSchedule: val.idBarberSchedule, dayName: val.dayName, startHour: startFormatted, endHour: endFormatted }
      : { idUser: val.idUser || this.selectedBarberId, dayName: val.dayName, startHour: startFormatted, endHour: endFormatted };

    this.api.invoke(fn, { body }).then((response: any) => {
      const data = typeof response === 'string' ? JSON.parse(response) : response;
      if (data?.type === 'success') {
        this.messageService.add({ severity: 'success', summary: 'Correcto', detail: data.listMessage?.[0] ?? 'Horario guardado.' });
        this.dialogVisible = false;
        this.loadSchedulesForBarber(this.selectedBarberId);
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: data.listMessage?.[0] ?? 'Error al guardar.' });
      }
    }).catch(() => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error de conexión.' });
    }).finally(() => {
      this.saving = false;
      this.cdr.detectChanges();
    });
  }

  confirmDelete(event: Event, sched: any): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `¿Desactivar el horario para el día ${sched.dayName}?`,
      header: 'Confirmar desactivación',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: { label: 'Cancelar', severity: 'secondary', outlined: true },
      acceptButtonProps:  { label: 'Sí, desactivar', severity: 'danger' },
      accept: () => {
        this.api.invoke(apibarberscheduledelete, { idBarberSchedule: sched.idBarberSchedule }).then((response: any) => {
          const data = typeof response === 'string' ? JSON.parse(response) : response;
          if (data?.type === 'success') {
            this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Horario desactivado.' });
            this.loadSchedulesForBarber(this.selectedBarberId);
          } else {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo desactivar.' });
          }
        }).catch(() => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al desactivar el horario.' });
        });
      }
    });
  }

  formatHour12(timeStr: string): string {
    if (!timeStr) return '';
    const parts = timeStr.split(':');
    let hours = Number.parseInt(parts[0], 10);
    const minutes = parts[1];
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours || 12;
    return `${hours.toString().padStart(2, '0')}:${minutes} ${ampm}`;
  }
}
