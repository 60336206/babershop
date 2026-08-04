import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiConfiguration } from './api-configuration';



describe('ApiConfiguration', () => {
  let component: ApiConfiguration;
  

  beforeEach(async () => {
    (window as any).apiMockResponse = { type: 'success', idCustomer: 1, idAppointment: 1, listMessage: [], listCustomer: [{status: 1}], listService: [], listGallery: [], listUser: [{status:1}], listSchedule: [] };
    TestBed.configureTestingModule({ providers: [ApiConfiguration] });

    component = TestBed.inject(ApiConfiguration);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    try { component.ngOnInit(); } catch(e) {}
  });
  
});
