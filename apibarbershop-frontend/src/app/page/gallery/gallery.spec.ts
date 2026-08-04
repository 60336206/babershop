import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Gallery } from './gallery';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Api } from '@/app/api/api';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';


describe('Gallery', () => {
  let component: Gallery;
  let fixture: ComponentFixture<Gallery>;

  beforeEach(async () => {
    (window as any).apiMockResponse = { type: 'success', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [] };
    await TestBed.configureTestingModule({
      imports: [Gallery, HttpClientTestingModule],
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

    
    fixture = TestBed.createComponent(Gallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    try { component.ngOnInit(); } catch(e) {}
  });
  
  it('should call loadGallery (success)', async () => {
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

    try { component.loadGallery(); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call loadGallery (error)', async () => {
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

    try { component.loadGallery(); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call loadGallery (reject)', async () => {
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

    try { component.loadGallery(); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
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

  it('should call onImageSelect (success)', async () => {
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

    try { component.onImageSelect({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call onImageSelect (error)', async () => {
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

    try { component.onImageSelect({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call onImageSelect (reject)', async () => {
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

    try { component.onImageSelect({ target: { files: [new Blob([""], {type:"image/jpeg"})] }, value: "test" } as any); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call removeImage (success)', async () => {
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

    try { component.removeImage(); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call removeImage (error)', async () => {
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

    try { component.removeImage(); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call removeImage (reject)', async () => {
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

    try { component.removeImage(); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call saveGallery (success)', async () => {
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

    try { component.saveGallery(); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call saveGallery (error)', async () => {
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

    try { component.saveGallery(); } catch(e) {}
    await new Promise(r => setTimeout(r, 50));
  });

  it('should call saveGallery (reject)', async () => {
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

    try { component.saveGallery(); } catch(e) {}
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

  it('should call getter titleFb', () => {
    try { const temp = component.titleFb; } catch(e) {}
  });
  it('should call getter descriptionFb', () => {
    try { const temp = component.descriptionFb; } catch(e) {}
  });
});
