import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { Api } from '../../../api/api';
import { ApiConfiguration } from '../../../api/api-configuration';
import {
  apicomplaintgetall,
  apicomplaintexporttxt,
  apicomplaintexportpdf,
  apicomplaintexportxlsx,
} from '../../../api/functions';

@Component({
  selector: 'app-complaint-get-all',
  standalone: true,
  imports: [CommonModule, DatePipe, ButtonModule, TableModule, TagModule, DialogModule, ToastModule],
  templateUrl: './complaint-get-all.html',
  styleUrl: './complaint-get-all.css',
  providers: [MessageService],
})
export class ComplaintGetAll implements OnInit {
  private messageService = inject(MessageService);

  listComplaint: any[] = [];
  loading: boolean = false;
  exportingTxt: boolean = false;
  exportingPdf: boolean = false;
  exportingXlsx: boolean = false;

  detailVisible: boolean = false;
  selectedComplaint: any = null;
  selectedFiles: any[] = [];

  constructor(
    private api: Api,
    private http: HttpClient,
    private config: ApiConfiguration
  ) {}

  ngOnInit(): void {
    this.loadComplaints();
  }

  private loadComplaints(): void {
    this.loading = true;
    this.api.invoke(apicomplaintgetall).then((response: any) => {
      const data = typeof response === 'string' ? JSON.parse(response) : response;
      this.listComplaint = data.listComplaint ?? [];
    }).catch(() => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar el listado de quejas.' });
    }).finally(() => {
      this.loading = false;
    });
  }

  getStatusSeverity(status: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' {
    switch (status) {
      case 'Pendiente de revisión': return 'warn';
      case 'Visto': return 'info';
      case 'En coordinación': return 'info';
      case 'Rechazado': return 'danger';
      case 'Cerrado': return 'secondary';
      default: return 'secondary';
    }
  }

  openDetail(complaint: any): void {
    this.selectedComplaint = complaint;
    this.selectedFiles = complaint.listFiles ?? [];
    this.detailVisible = true;
  }

  // ─── Exportar TXT ──────────────────────────────────────────────────────────
  exportTxt(): void {
    this.exportingTxt = true;
    firstValueFrom(apicomplaintexporttxt(this.http, this.config.rootUrl))
      .then((response) => {
        if (response.body) {
          this.triggerDownload(response.body, 'quejas.txt', 'text/plain');
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Archivo TXT descargado.' });
        }
      })
      .catch(() => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo exportar el archivo TXT.' });
      })
      .finally(() => { this.exportingTxt = false; });
  }

  // ─── Exportar PDF ──────────────────────────────────────────────────────────
  exportPdf(): void {
    this.exportingPdf = true;
    firstValueFrom(apicomplaintexportpdf(this.http, this.config.rootUrl))
      .then((response) => {
        if (response.body) {
          this.triggerDownload(response.body, 'quejas.pdf', 'application/pdf');
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Archivo PDF descargado.' });
        }
      })
      .catch(() => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo exportar el archivo PDF.' });
      })
      .finally(() => { this.exportingPdf = false; });
  }

  // ─── Exportar XLSX ─────────────────────────────────────────────────────────
  exportXlsx(): void {
    this.exportingXlsx = true;
    firstValueFrom(apicomplaintexportxlsx(this.http, this.config.rootUrl))
      .then((response) => {
        if (response.body) {
          this.triggerDownload(
            response.body,
            'quejas.xlsx',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
          );
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Archivo Excel descargado.' });
        }
      })
      .catch(() => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo exportar el archivo Excel.' });
      })
      .finally(() => { this.exportingXlsx = false; });
  }

  // ─── Helper: dispara descarga de Blob ──────────────────────────────────────
  private triggerDownload(blob: Blob, filename: string, mimeType: string): void {
    const url = window.URL.createObjectURL(new Blob([blob], { type: mimeType }));
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(url);
  }
}
