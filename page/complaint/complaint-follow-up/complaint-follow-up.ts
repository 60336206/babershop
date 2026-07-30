import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TextareaModule } from 'primeng/textarea';
import { MessageService } from 'primeng/api';

import { Api } from '../../../api/api';
import {
    apicomplaintgetbycode,
    apicomplaintcommentgetall,
    apicomplaintcommentinsert,
    apicomplaintcommentdelete
} from '../../../api/functions';

const STATUS_STEPS = [
    'Pendiente de revisión',
    'Visto',
    'Rechazado',
    'En coordinación',
    'Cerrado'
];

@Component({
    selector: 'app-complaint-follow-up',
    imports: [
        FormsModule,
        ButtonModule,
        InputTextModule,
        RadioButtonModule,
        TextareaModule
    ],
    templateUrl: './complaint-follow-up.html',
    styleUrl: './complaint-follow-up.css'
})
export class ComplaintFollowUp {

    type: string = 'complaint';
    code: string = '';

    complaint: any = null;
    statusSteps = STATUS_STEPS;

    listComment = signal<any[]>([]);
    newComment: string = '';

    searching = signal(false);
    inserting = signal(false);

    constructor(
        private api: Api,
        private messageService: MessageService
    ) {}

    get currentStepIndex(): number {
        if (!this.complaint) return -1;
        return STATUS_STEPS.indexOf(this.complaint.status);
    }

    search(): void {
        if (!this.code.trim()) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Atención',
                detail: 'Ingresa el código de seguimiento.'
            });
            return;
        }

        this.complaint = null;
        this.listComment.set([]);
        this.searching.set(true);

        this.api.invoke(apicomplaintgetbycode, { code: this.code.trim() })
            .then((response: any) => {
                const data = typeof response === 'string' ? JSON.parse(response) : response;

                if (data.type !== 'success') {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'No encontrado',
                        detail: data.listMessage[0]
                    });
                    return;
                }

                this.complaint = data.complaint;
                this.listComment.set(data.complaint.listComment ?? []);
            })
            .catch(() => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Exception',
                    detail: 'No se pudo conectar con el servidor.'
                });
            })
            .finally(() => {
                this.searching.set(false);
            });
    }

    addComment(): void {
        if (!this.newComment.trim()) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Atención',
                detail: 'Escribe un comentario antes de enviar.'
            });
            return;
        }

        this.inserting.set(true);

        this.api.invoke(apicomplaintcommentinsert, {
            body: {
                idComplaint: this.complaint.idComplaint,
                description: this.newComment.trim()
            }
        })
        .then((response: any) => {
            const data = typeof response === 'string' ? JSON.parse(response) : response;

            if (data.type !== 'success') {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: data.listMessage[0]
                });
                return;
            }

            this.newComment = '';
            this.refreshComments();
        })
        .catch(() => {
            this.messageService.add({
                severity: 'error',
                summary: 'Exception',
                detail: 'No se pudo registrar el comentario.'
            });
        })
        .finally(() => {
            this.inserting.set(false);
        });
    }

    deleteComment(idComplaintcomment: string): void {
        this.api.invoke(apicomplaintcommentdelete, { idComplaintcomment })
            .then((response: any) => {
                const data = typeof response === 'string' ? JSON.parse(response) : response;

                if (data.type !== 'success') {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: data.listMessage[0]
                    });
                    return;
                }

                this.listComment.update(list =>
                    list.filter(c => c.idComplaintcomment !== idComplaintcomment)
                );

                this.messageService.add({
                    severity: 'success',
                    summary: 'Correcto',
                    detail: 'Comentario eliminado.'
                });
            })
            .catch(() => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Exception',
                    detail: 'No se pudo eliminar el comentario.'
                });
            });
    }

    private refreshComments(): void {
        this.api.invoke(apicomplaintcommentgetall, { idComplaint: this.complaint.idComplaint })
            .then((response: any) => {
                const data = typeof response === 'string' ? JSON.parse(response) : response;
                if (data.type === 'success') {
                    this.listComment.set(data.listComment);
                }
            });
    }
}
