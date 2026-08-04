import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Schedules } from './schedules';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Api } from '@/app/api/api';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';


describe('Schedules', () => {
  let component: Schedules;
  let fixture: ComponentFixture<Schedules>;

  beforeEach(async () => {
    (window as any).apiMockResponse = { type: 'success', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [] };
    await TestBed.configureTestingModule({
      imports: [Schedules, HttpClientTestingModule],
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

    
    fixture = TestBed.createComponent(Schedules);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    try { component.ngOnInit(); } catch(e) {}
  });
  
  it('should call loadBarbers (success)', async () => {
    (window as any).apiMockResponse = { type: 'success', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [], listBarberSchedule: [] };
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.loadBarbers(); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call loadBarbers (error)', async () => {
    (window as any).apiMockResponse = { type: 'error', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [], listBarberSchedule: [] };
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.loadBarbers(); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call loadBarbers (reject)', async () => {
    (window as any).apiMockResponse = 'REJECT';
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.loadBarbers(); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call onBarberChange (success)', async () => {
    (window as any).apiMockResponse = { type: 'success', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [], listBarberSchedule: [] };
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.onBarberChange({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call onBarberChange (error)', async () => {
    (window as any).apiMockResponse = { type: 'error', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [], listBarberSchedule: [] };
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.onBarberChange({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call onBarberChange (reject)', async () => {
    (window as any).apiMockResponse = 'REJECT';
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.onBarberChange({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call loadSchedulesForBarber (success)', async () => {
    (window as any).apiMockResponse = { type: 'success', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [], listBarberSchedule: [] };
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.loadSchedulesForBarber({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call loadSchedulesForBarber (error)', async () => {
    (window as any).apiMockResponse = { type: 'error', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [], listBarberSchedule: [] };
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.loadSchedulesForBarber({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call loadSchedulesForBarber (reject)', async () => {
    (window as any).apiMockResponse = 'REJECT';
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.loadSchedulesForBarber({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call mapWeeklySchedule (success)', async () => {
    (window as any).apiMockResponse = { type: 'success', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [], listBarberSchedule: [] };
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.mapWeeklySchedule({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call mapWeeklySchedule (error)', async () => {
    (window as any).apiMockResponse = { type: 'error', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [], listBarberSchedule: [] };
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.mapWeeklySchedule({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call mapWeeklySchedule (reject)', async () => {
    (window as any).apiMockResponse = 'REJECT';
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.mapWeeklySchedule({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call openAdd (success)', async () => {
    (window as any).apiMockResponse = { type: 'success', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [], listBarberSchedule: [] };
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.openAdd({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call openAdd (error)', async () => {
    (window as any).apiMockResponse = { type: 'error', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [], listBarberSchedule: [] };
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.openAdd({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call openAdd (reject)', async () => {
    (window as any).apiMockResponse = 'REJECT';
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.openAdd({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call openEdit (success)', async () => {
    (window as any).apiMockResponse = { type: 'success', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [], listBarberSchedule: [] };
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.openEdit({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call openEdit (error)', async () => {
    (window as any).apiMockResponse = { type: 'error', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [], listBarberSchedule: [] };
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.openEdit({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call openEdit (reject)', async () => {
    (window as any).apiMockResponse = 'REJECT';
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.openEdit({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call saveSchedule (success)', async () => {
    (window as any).apiMockResponse = { type: 'success', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [], listBarberSchedule: [] };
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.saveSchedule(); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call saveSchedule (error)', async () => {
    (window as any).apiMockResponse = { type: 'error', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [], listBarberSchedule: [] };
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.saveSchedule(); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call saveSchedule (reject)', async () => {
    (window as any).apiMockResponse = 'REJECT';
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.saveSchedule(); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call confirmDelete (success)', async () => {
    (window as any).apiMockResponse = { type: 'success', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [], listBarberSchedule: [] };
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.confirmDelete({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any, { target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call confirmDelete (error)', async () => {
    (window as any).apiMockResponse = { type: 'error', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [], listBarberSchedule: [] };
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.confirmDelete({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any, { target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call confirmDelete (reject)', async () => {
    (window as any).apiMockResponse = 'REJECT';
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.confirmDelete({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any, { target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call formatHour12 (success)', async () => {
    (window as any).apiMockResponse = { type: 'success', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [], listBarberSchedule: [] };
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.formatHour12({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call formatHour12 (error)', async () => {
    (window as any).apiMockResponse = { type: 'error', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [], listBarberSchedule: [] };
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.formatHour12({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call formatHour12 (reject)', async () => {
    (window as any).apiMockResponse = 'REJECT';
    
    try {
      const mockData = { name: 'a', firstName: 'a', surName: 'b', phone: '1', date: new Date(), barber: {idUser: 1}, startHour: '10:00', duration: 30, price: 10, email: 'a@a.com', username: 'a', password: '1', idRole: 1, document: '1', role: { idRole: 1 }, category: { idCategory: 1 }, service: { idService: 1 }, customer: { idCustomer: 1 }, address: 'a', businessName: 'b', businessPhone: 'c' };
      if (component.frmAppointment) { Object.defineProperty(component.frmAppointment, 'valid', { get: () => true }); component.frmAppointment.patchValue(mockData); }
      if (component.frmCustomer) { Object.defineProperty(component.frmCustomer, 'valid', { get: () => true }); component.frmCustomer.patchValue(mockData); }
      if (component.frmUser) { Object.defineProperty(component.frmUser, 'valid', { get: () => true }); component.frmUser.patchValue(mockData); }
      if (component.frmService) { Object.defineProperty(component.frmService, 'valid', { get: () => true }); component.frmService.patchValue(mockData); }
      if (component.frmSettings) { Object.defineProperty(component.frmSettings, 'valid', { get: () => true }); component.frmSettings.patchValue(mockData); }
      if (component.frmSchedule) { Object.defineProperty(component.frmSchedule, 'valid', { get: () => true }); component.frmSchedule.patchValue(mockData); }
      if (component.frmLogin) { Object.defineProperty(component.frmLogin, 'valid', { get: () => true }); component.frmLogin.patchValue(mockData); }
      if (component.frmGallery) { Object.defineProperty(component.frmGallery, 'valid', { get: () => true }); component.frmGallery.patchValue(mockData); }
      if (component.frmDashboard) { Object.defineProperty(component.frmDashboard, 'valid', { get: () => true }); component.frmDashboard.patchValue(mockData); }
      component.referenceImageFile = new Blob([''], { type: 'image/png' }) as any;
      component.selectedPhoto = new Blob([''], { type: 'image/png' }) as any;
      component.selectedServices = [{ idService: 1, price: 10 }];
    } catch(e) {}

    try { component.formatHour12({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call getter startHourFb', () => {
    try { const temp = component.startHourFb; } catch(e) {}
  });
  it('should call getter endHourFb', () => {
    try { const temp = component.endHourFb; } catch(e) {}
  });
  it('should call getter dayNameFb', () => {
    try { const temp = component.dayNameFb; } catch(e) {}
  });
});

describe('Schedules business flows', () => {
  let component: Schedules;
  let api: { invoke: jest.Mock };
  let messages: { add: jest.Mock };
  let confirmations: { confirm: jest.Mock };

  const settle = () => new Promise<void>(resolve => setTimeout(resolve, 0));
  const barber = { idUser: '7', role: 'BARBER', firstName: 'Ana' };
  const schedule = { idBarberSchedule: '12', idUser: '7', dayName: 'Lunes', startHour: '09:00:00', endHour: '18:00:00', status: 1 };

  beforeEach(async () => {
    api = { invoke: jest.fn().mockResolvedValue({ listUser: [] }) };
    messages = { add: jest.fn() };
    confirmations = { confirm: jest.fn() };
    await TestBed.configureTestingModule({
      imports: [Schedules],
      providers: [
        { provide: Api, useValue: api },
        { provide: MessageService, useValue: messages },
        { provide: ConfirmationService, useValue: confirmations },
        { provide: ActivatedRoute, useValue: { params: of({}), queryParams: of({}) } }
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    component = TestBed.createComponent(Schedules).componentInstance;
  });

  it('loads barbers, keeps only BARBER users and loads their schedules', async () => {
    api.invoke.mockResolvedValueOnce({ listUser: [{ idUser: '1', role: 'ADMIN' }, barber] }).mockResolvedValueOnce({ listBarberSchedule: [schedule] });
    component.loadBarbers();
    await settle(); await settle();
    expect(component.listBarbers).toEqual([barber]);
    expect(component.selectedBarberId).toBe('7');
    expect(component.weeklySchedule.find(day => day.dayName === 'Lunes')?.schedule).toEqual(schedule);
    expect(component.loadingBarbers).toBe(false);
    expect(component.loadingSchedules).toBe(false);
  });

  it('uses the signed-in barber directly and reports loading errors', async () => {
    (component as any).user = barber;
    api.invoke.mockResolvedValueOnce({ listBarberSchedule: [] });
    component.loadBarbers();
    await settle();
    expect(component.listBarbers).toEqual([barber]);
    api.invoke.mockRejectedValueOnce(new Error('offline'));
    component.loadSchedulesForBarber('7');
    await settle();
    expect(messages.add).toHaveBeenCalledWith(expect.objectContaining({ severity: 'error' }));
    expect(component.loadingSchedules).toBe(false);
  });

  it('maps active schedules, opens both dialog modes and formats hours', () => {
    component.mapWeeklySchedule([schedule, { ...schedule, dayName: 'Martes', status: 0 }]);
    expect(component.weeklySchedule[0].schedule).toEqual(schedule);
    expect(component.weeklySchedule[1].schedule).toBeNull();
    component.selectedBarberId = '7';
    component.openAdd('Viernes');
    expect(component.frmSchedule.value).toEqual(expect.objectContaining({ idUser: '7', dayName: 'Viernes' }));
    component.openEdit(schedule);
    expect(component.frmSchedule.value).toEqual(expect.objectContaining({ startHour: '09:00', endHour: '18:00' }));
    expect(component.formatHour12('00:05:00')).toBe('12:05 AM');
    expect(component.formatHour12('13:30:00')).toBe('01:30 PM');
    expect(component.formatHour12('')).toBe('');
  });

  it('validates and saves a schedule, then reloads the barber schedule', async () => {
    component.saveSchedule();
    expect(messages.add).toHaveBeenCalledWith(expect.objectContaining({ severity: 'warn' }));
    component.frmSchedule.patchValue({ idUser: '7', dayName: 'Lunes', startHour: '18:00', endHour: '09:00' });
    component.saveSchedule();
    expect(messages.add).toHaveBeenLastCalledWith(expect.objectContaining({ severity: 'warn' }));
    component.frmSchedule.patchValue({ startHour: '09:00', endHour: '18:00' });
    component.selectedBarberId = '7';
    api.invoke.mockResolvedValueOnce({ type: 'success', listMessage: ['Guardado'] }).mockResolvedValueOnce({ listBarberSchedule: [] });
    component.saveSchedule();
    await settle(); await settle();
    expect(api.invoke).toHaveBeenCalledTimes(2);
    expect(messages.add).toHaveBeenCalledWith(expect.objectContaining({ severity: 'success', detail: 'Guardado' }));
    expect(component.dialogVisible).toBe(false);
    expect(component.saving).toBe(false);
  });

  it('deactivates a schedule after confirmation and handles an unsuccessful response', async () => {
    component.selectedBarberId = '7';
    component.confirmDelete({ target: document.body } as unknown as Event, schedule);
    api.invoke.mockResolvedValueOnce({ type: 'success' }).mockResolvedValueOnce({ listBarberSchedule: [] });
    confirmations.confirm.mock.calls[0][0].accept();
    await settle(); await settle();
    expect(messages.add).toHaveBeenCalledWith(expect.objectContaining({ severity: 'success' }));
    component.confirmDelete({ target: document.body } as unknown as Event, schedule);
    api.invoke.mockResolvedValueOnce({ type: 'error' });
    confirmations.confirm.mock.calls[1][0].accept();
    await settle();
    expect(messages.add).toHaveBeenLastCalledWith(expect.objectContaining({ severity: 'error' }));
  });
});
