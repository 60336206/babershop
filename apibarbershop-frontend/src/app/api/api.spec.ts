import { TestBed } from '@angular/core/testing';
import { Api } from './api';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiConfiguration } from './api-configuration';
import { of } from 'rxjs';
import { HttpResponse, HttpContext } from '@angular/common/http';

describe('Api', () => {
  let api: Api;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        Api,
        ApiConfiguration
      ]
    });
    api = TestBed.inject(Api);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should be created', () => {
    expect(api).toBeTruthy();
  });

  it('rootUrl getter returns config rootUrl by default', () => {
    expect(api.rootUrl).toBeDefined();
  });

  it('rootUrl setter overrides config rootUrl', () => {
    api.rootUrl = 'http://custom.test';
    expect(api.rootUrl).toBe('http://custom.test');
  });

  it('rootUrl getter falls back to config when _rootUrl is not set', () => {
    // When _rootUrl is not set, should return config.rootUrl
    const config = TestBed.inject(ApiConfiguration);
    expect(api.rootUrl).toBe(config.rootUrl);
  });

  it('should call invoke and return body', async () => {
    const mockFn = jest.fn().mockReturnValue(
      of(new HttpResponse({ body: { data: 'test' }, status: 200 }))
    );
    const result = await api.invoke(mockFn, {});
    expect(result).toEqual({ data: 'test' });
    expect(mockFn).toHaveBeenCalled();
  });

  it('should call invoke without params', async () => {
    const mockFn = jest.fn().mockReturnValue(
      of(new HttpResponse({ body: { success: true }, status: 200 }))
    );
    const result = await api.invoke(mockFn);
    expect(result).toEqual({ success: true });
  });

  it('should call invoke with HttpContext', async () => {
    const mockFn = jest.fn().mockReturnValue(
      of(new HttpResponse({ body: 'ok', status: 200 }))
    );
    const ctx = new HttpContext();
    const result = await api.invoke(mockFn, {}, ctx);
    expect(result).toBe('ok');
    expect(mockFn).toHaveBeenCalledWith(expect.anything(), expect.anything(), {}, ctx);
  });

  it('should call invoke$Response and return full response', async () => {
    const mockFn = jest.fn().mockReturnValue(
      of(new HttpResponse({ body: { id: 1 }, status: 200, url: 'http://test/api' }))
    );
    const response = await api.invoke$Response(mockFn, {});
    expect(response).toBeTruthy();
    expect(response.body).toEqual({ id: 1 });
  });

  it('should call invoke$Response without params', async () => {
    const mockFn = jest.fn().mockReturnValue(
      of(new HttpResponse({ body: null, status: 204 }))
    );
    const response = await api.invoke$Response(mockFn);
    expect(response.status).toBe(204);
  });
});
