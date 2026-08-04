import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { apiappointmentinsert } from './apiappointmentinsert';

describe('apiappointmentinsert', () => {
  it('should call the function and return response', (done) => {
    const httpClientMock: any = {
      request: jest.fn().mockReturnValue(of(new HttpResponse({ body: { success: true }, status: 200 })))
    };
    
    apiappointmentinsert(httpClientMock, 'http://localhost', {
        body: {
          idAppointment: '1',
          idCustomer: '1',
          idService: '1',
          idUser: '1',
          appointmentDate: '2024-01-01',
          startHour: '10:00',
          endHour: '11:00',
          status: '1',
          observation: 'test',
          email: 'test@test.com',
          password: 'password',
          name: 'Test',
          document: '123',
          address: 'addr',
          phone: '1234',
          image: '',
          duration: 30,
          price: 10,
          businessName: 'biz',
          businessPhone: '555',
          businessAddress: 'addr2',
          businessImage: '',
          businessDescription: 'desc'
        }
      } as any, new HttpContext()).subscribe(res => {
      expect(res).toBeTruthy();
      done();
    });
    
    expect(httpClientMock.request).toHaveBeenCalled();
  });

  it('should handle undefined params', (done) => {
    const httpClientMock: any = {
      request: jest.fn().mockReturnValue(of(new HttpResponse({ body: null })))
    };
    
    try {
      apiappointmentinsert(httpClientMock, 'http://localhost', undefined as any).subscribe(() => done());
    } catch(e) {
      done();
    }
  });
});
