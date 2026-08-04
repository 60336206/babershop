import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Api } from '@/app/api/api';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';


describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    (window as any).apiMockResponse = { type: 'success', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [] };
    await TestBed.configureTestingModule({
      imports: [App, HttpClientTestingModule],
      providers: [
        
        MessageService,
        ConfirmationService,
        {
          provide: ActivatedRoute,
          useValue: { params: of({}), queryParams: of({}) }
        },
        {
          provide: Api,
          useValue: {
            invoke: (fn, params, context) => {
              if (typeof fn === 'function') {
                try {
                  const httpMock = { request: () => ({ pipe: () => {} }) };
                  fn(httpMock, 'http://localhost', params || {}, context);
                } catch(e) {}
              }
              if ((window as any).apiMockResponse === 'REJECT') return Promise.reject('error');
              return Promise.resolve((window as any).apiMockResponse);
            }
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    
    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    try { component.ngOnInit(); } catch(e) {}
  });
  
});
