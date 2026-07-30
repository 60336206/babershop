import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DatePickerModule } from 'primeng/datepicker';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Api } from '../../../api/api';
import {
  apiofficegetall,
  apiprofessorsearch,
  apicomplaintinsert,
  Apicomplaintinsert$Params
} from '../../../api/functions';

@Component({
  selector: 'app-complaint-insert',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    ButtonModule,
    FileUploadModule,
    SelectModule,
    RadioButtonModule,
    DatePickerModule,
    AutoCompleteModule
  ],
  templateUrl: './complaint-insert.html',
  styleUrl: './complaint-insert.css'
})
export class ComplaintInsert implements OnInit {
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);
  frmInsert: FormGroup;
  listOffice: any[] = [];
  accusedType: string = 'DOC';
  professorSuggestions: any[] = [];
  selectedProfessor: any = null;
  studentName: string = '';
  fileQuantity = 0;
  fileRowList: any[] = [];
  listFile: any[] = [];
  selectedDate: Date | null = null;
  today: Date = new Date();
  get personFullNameFb() {
    return this.frmInsert.controls['personFullName'];
  }
  get officeFb() {
    return this.frmInsert.controls['office'];
  }
  get descriptionFb() {
    return this.frmInsert.controls['description'];
  }
  constructor(
    private formBuilder: FormBuilder,
    private api: Api
  ) {
    this.frmInsert = this.formBuilder.group({
      personFullName: [''],
      office: [null, Validators.required],
      description: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.loadOffices();
  }
  private loadOffices(): void {
    this.api.invoke(apiofficegetall)
      .then((response: any) => {
        const data =
          typeof response === 'string'
            ? JSON.parse(response)
            : response;
        this.listOffice = data.listOffice ?? [];
      })
      .catch((error) => {
        console.error(error);
      });
  }
  searchProfessor(event: any): void {
    const query = event.query?.trim() ?? '';
    if (!query) {
      this.professorSuggestions = [];
      return;
    }
    this.api.invoke(apiprofessorsearch, { query })
      .then((response: any) => {

        const data =
          typeof response === 'string'
            ? JSON.parse(response)
            : response;

        this.professorSuggestions = data.listProfessor ?? [];
        console.log('Profesores encontrados:', this.professorSuggestions);
      })
      .catch((error) => {
        console.error(error);
        this.professorSuggestions = [];
      });
  }
  addFile(): void {
    this.fileQuantity++;

    this.fileRowList.push({
      id: 'file' + this.fileQuantity
    });
  }
  removeFile(element: any): void {
    const indexRow = this.fileRowList.findIndex(
      x => x.id === element.id
    );
    if (indexRow >= 0) {
      this.fileRowList.splice(indexRow, 1);
    }
    const indexFile = this.listFile.findIndex(
      x => x.name === element.id
    );
    if (indexFile >= 0) {
      this.listFile.splice(indexFile, 1);
    }
  }
  onFileSelect(event: any, name: string): void {
    const file =
      event.currentFiles?.[0] ??
      event.files?.[0];
    if (!file) {
      return;
    }
    const existingIndex = this.listFile.findIndex(
      x => x.name === name
    );
    if (existingIndex >= 0) {
      this.listFile[existingIndex].file = file;
    } else {
      this.listFile.push({
        name,
        file
      });
    }
  }
  sendInsert(event: Event): void {
    if (!this.frmInsert.valid) {
      this.frmInsert.markAllAsTouched();
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Complete y corrija todos los datos faltantes.'
      });
      return;
    }

    if (
      this.accusedType === 'DOC' &&
      !this.selectedProfessor
    ) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Debe seleccionar un docente acusado.'
      });
      return;
    }
    if (
      this.accusedType === 'EST' &&
      (!this.studentName || !this.studentName.trim())
    ) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Debe ingresar el nombre del estudiante acusado.'
      });
      return;
    }
    this.confirmationService.confirm({
      target: event.target as EventTarget,

      message: '¿Confirmar registro de la queja?',
      header: 'Confirmación',
      icon: 'pi pi-info-circle',
      rejectButtonProps: {
        label: 'Cancelar',
        severity: 'secondary',
        outlined: true
      },
      acceptButtonProps: {
        label: 'Registrar datos',
        severity: 'primary'
      },
      accept: () => {
        const filesToSend: Blob[] =
          this.listFile.map(x => x.file);
        let issueDateStr = '';
        if (this.selectedDate) {
          issueDateStr =
            `${this.selectedDate.getFullYear()}-` +
            `${String(this.selectedDate.getMonth() + 1).padStart(2, '0')}-` +
            `${String(this.selectedDate.getDate()).padStart(2, '0')}`;
        }
        const bodyParams: Apicomplaintinsert$Params = {
          body: {
            personFullName: this.personFullNameFb.value,
            idOffice: this.officeFb.value.idOffice,
            accusedType: this.accusedType,
            idProfessor:
              this.accusedType === 'DOC'
                ? this.selectedProfessor.idProfessor
                : '',
            denouncedFullname:
              this.accusedType === 'EST'
                ? this.studentName
                : '',
            description: this.descriptionFb.value,
            issueDate: issueDateStr,
            files: filesToSend
          }
        };
        this.api.invoke(apicomplaintinsert, bodyParams)
          .then((response: any) => {
            const data =
              typeof response === 'string'
                ? JSON.parse(response)
                : response;
            if (data.type === 'success') {
              this.messageService.add({
                severity: 'success',
                summary: 'Correcto',
                detail:
                  data.listMessage?.[0] ??
                  'Registro realizado correctamente.'
              });
              this.resetForm();
            } else {
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail:
                  data.listMessage?.[0] ??
                  'Error al registrar.'
              });
            }
          })
          .catch((error) => {
            console.error(error);
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Algo ocurrió mal.'
            });
          });
      }
    });
  }
  resetForm(): void {
    this.frmInsert.reset();
    this.accusedType = 'DOC';
    this.selectedProfessor = null;
    this.professorSuggestions = [];
    this.studentName = '';
    this.selectedDate = null;
    this.fileRowList = [];
    this.listFile = [];
    this.fileQuantity = 0;
  }
}