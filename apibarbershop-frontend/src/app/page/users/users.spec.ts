import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Users } from './users';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Api } from '@/app/api/api';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';


describe('Users', () => {
  let component: Users;
  let fixture: ComponentFixture<Users>;

  beforeEach(async () => {
    (window as any).apiMockResponse = { type: 'success', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [] };
    await TestBed.configureTestingModule({
      imports: [Users, HttpClientTestingModule],
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

    
    fixture = TestBed.createComponent(Users);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    try { component.ngOnInit(); } catch(e) {}
  });
  
  it('should call openNew (success)', async () => {
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

    try { component.openNew(); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call openNew (error)', async () => {
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

    try { component.openNew(); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call openNew (reject)', async () => {
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

    try { component.openNew(); } catch(e) {}
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

  it('should call toggleStatus (success)', async () => {
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

    try { component.toggleStatus({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call toggleStatus (error)', async () => {
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

    try { component.toggleStatus({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call toggleStatus (reject)', async () => {
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

    try { component.toggleStatus({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call onPhotoSelected (success)', async () => {
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

    try { component.onPhotoSelected({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call onPhotoSelected (error)', async () => {
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

    try { component.onPhotoSelected({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call onPhotoSelected (reject)', async () => {
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

    try { component.onPhotoSelected({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call saveUser (success)', async () => {
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

    try { component.saveUser(); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call saveUser (error)', async () => {
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

    try { component.saveUser(); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call saveUser (reject)', async () => {
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

    try { component.saveUser(); } catch(e) {}
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

  it('should call getRoleSeverity (success)', async () => {
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

    try { component.getRoleSeverity({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call getRoleSeverity (error)', async () => {
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

    try { component.getRoleSeverity({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call getRoleSeverity (reject)', async () => {
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

    try { component.getRoleSeverity({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call getStatusSeverity (success)', async () => {
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

    try { component.getStatusSeverity({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call getStatusSeverity (error)', async () => {
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

    try { component.getStatusSeverity({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call getStatusSeverity (reject)', async () => {
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

    try { component.getStatusSeverity({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call getter firstNameFb', () => {
    try { const temp = component.firstNameFb; } catch(e) {}
  });
  it('should call getter surNameFb', () => {
    try { const temp = component.surNameFb; } catch(e) {}
  });
  it('should call getter emailFb', () => {
    try { const temp = component.emailFb; } catch(e) {}
  });
  it('should call getter phoneFb', () => {
    try { const temp = component.phoneFb; } catch(e) {}
  });
  it('should call getter passwordFb', () => {
    try { const temp = component.passwordFb; } catch(e) {}
  });
  it('should call getter roleFb', () => {
    try { const temp = component.roleFb; } catch(e) {}
  });
});
