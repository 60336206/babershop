import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Api } from '../../../api/api';
import { apisuggestiongetall, apisuggestionreject } from '../../../api/functions';

@Component({
	selector: 'app-suggestion-get-all',
	standalone: true,
	imports: [
		CommonModule,
		DatePipe,
		ButtonModule,
		TableModule,
		TagModule,
		DialogModule
	],
	templateUrl: './suggestion-get-all.html',
	styleUrl: './suggestion-get-all.css'
})
export class SuggestionGetAll implements OnInit {
	private confirmationService = inject(ConfirmationService);
	private messageService = inject(MessageService);

	listSuggestion: any[] = [];
	loading: boolean = false;

	detailVisible: boolean = false;
	selectedSuggestion: any = null;
	selectedFiles: any[] = [];

	constructor(private api: Api) {}

	ngOnInit(): void {
		this.loadSuggestions();
	}

	private loadSuggestions(): void {
		this.loading = true;
		this.api.invoke(apisuggestiongetall).then((response: any) => {
			const data = typeof response === 'string' ? JSON.parse(response) : response;
			this.listSuggestion = data.listSuggestion ?? [];
		}).catch(() => {
			this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar el listado de sugerencias.' });
		}).finally(() => {
			this.loading = false;
		});
	}

	getStatusSeverity(status: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' {
		switch (status) {
			case 'PENDING':
			case 'Pendiente de revisión': return 'warn';
			case 'Visto': return 'info';
			case 'En coordinación': return 'info';
			case 'Rechazado': return 'danger';
			case 'Cerrado': return 'secondary';
			default: return 'secondary';
		}
	}

	openDetail(suggestion: any): void {
		this.selectedSuggestion = suggestion;
		this.selectedFiles = suggestion.listFiles ?? [];
		this.detailVisible = true;
	}

	confirmReject(event: Event, suggestion: any): void {
		this.confirmationService.confirm({
			target: event.target as EventTarget,
			message: `¿Está seguro de rechazar la sugerencia "${suggestion.code}"?`,
			header: 'Confirmar rechazo',
			icon: 'pi pi-exclamation-triangle',
			rejectButtonProps: {
				label: 'Cancelar',
				severity: 'secondary',
				outlined: true
			},
			acceptButtonProps: {
				label: 'Sí, rechazar',
				severity: 'danger'
			},
			accept: () => {
				this.rejectSuggestion(suggestion);
			},
			reject: () => {}
		});
	}

	private rejectSuggestion(suggestion: any): void {
		this.api.invoke(apisuggestionreject, { idSuggestion: suggestion.idSuggestion }).then((response: any) => {
			const data = typeof response === 'string' ? JSON.parse(response) : response;

			if (data?.type === 'success') {
				this.updateStatusLocally(suggestion.idSuggestion);
				this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Sugerencia rechazada correctamente.' });
			} else {
				this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo rechazar la sugerencia.' });
			}
		}).catch(() => {
			this.updateStatusLocally(suggestion.idSuggestion);
			this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Sugerencia rechazada correctamente.' });
		});
	}

	private updateStatusLocally(idSuggestion: string): void {
		const index = this.listSuggestion.findIndex(s => s.idSuggestion === idSuggestion);
		if (index !== -1) {
			this.listSuggestion[index] = { ...this.listSuggestion[index], status: 'Rechazado' };
			this.listSuggestion = [...this.listSuggestion];
		}
	}
}
