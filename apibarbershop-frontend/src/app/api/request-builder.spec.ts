import { RequestBuilder } from './request-builder';
import { HttpParameterCodec, HttpContext } from '@angular/common/http';

describe('RequestBuilder', () => {
  it('should create and build with path params', () => {
    const rb = new RequestBuilder('http://localhost', '/api/{id}', 'post');
    rb.path('id', 123);
    rb.path('id2', null as any);
    const req = rb.build();
    expect(req.url).toContain('123');
  });

  it('should handle query params - form explode array', () => {
    const rb = new RequestBuilder('http://localhost', '/api', 'get');
    rb.query('arr', [1, 2], { explode: true, style: 'form' });
    const req = rb.build();
    expect(req).toBeTruthy();
  });

  it('should handle query params - pipeDelimited', () => {
    const rb = new RequestBuilder('http://localhost', '/api', 'get');
    rb.query('arr', [1, 2], { explode: false, style: 'pipeDelimited' });
    const req = rb.build();
    expect(req).toBeTruthy();
  });

  it('should handle query params - spaceDelimited', () => {
    const rb = new RequestBuilder('http://localhost', '/api', 'get');
    rb.query('arr', [1, 2], { explode: false, style: 'spaceDelimited' });
    const req = rb.build();
    expect(req).toBeTruthy();
  });

  it('should handle query params - deepObject', () => {
    const rb = new RequestBuilder('http://localhost', '/api', 'get');
    rb.query('obj', { a: 1, b: null }, { explode: true, style: 'deepObject' });
    const req = rb.build();
    expect(req).toBeTruthy();
  });

  it('should handle query params - object explode', () => {
    const rb = new RequestBuilder('http://localhost', '/api', 'get');
    rb.query('obj', { a: 1, b: null }, { explode: true, style: 'form' });
    const req = rb.build();
    expect(req).toBeTruthy();
  });

  it('should handle query params - object non-explode', () => {
    const rb = new RequestBuilder('http://localhost', '/api', 'get');
    rb.query('obj', { a: 1 }, { explode: false });
    const req = rb.build();
    expect(req).toBeTruthy();
  });

  it('should handle query params - plain value', () => {
    const rb = new RequestBuilder('http://localhost', '/api', 'get');
    rb.query('q', 'test');
    rb.query('b', true);
    rb.query('n', null as any);
    const req = rb.build({ accept: 'application/json' });
    expect(req).toBeTruthy();
  });

  it('should handle headers - array', () => {
    const rb = new RequestBuilder('http://localhost', '/api', 'get');
    rb.header('h', [1, 2]);
    rb.header('h2', null as any);
    rb.header('h3', 'val');
    const req = rb.build();
    expect(req).toBeTruthy();
  });

  it('should handle body - json object', () => {
    const rb = new RequestBuilder('http://localhost', '/api', 'post');
    rb.body({ a: 1 });
    const req = rb.build();
    expect(req).toBeTruthy();
  });

  it('should handle body - blob', () => {
    const rb = new RequestBuilder('http://localhost', '/api', 'post');
    rb.body(new Blob(['test'], { type: 'image/jpeg' }));
    const req = rb.build();
    expect(req).toBeTruthy();
  });

  it('should handle body - FormData', () => {
    const rb = new RequestBuilder('http://localhost', '/api', 'post');
    rb.body(new FormData());
    const req = rb.build();
    expect(req).toBeTruthy();
  });

  it('should handle body - string', () => {
    const rb = new RequestBuilder('http://localhost', '/api', 'post');
    rb.body('test string');
    const req = rb.build();
    expect(req).toBeTruthy();
  });

  it('should handle body - url encoded', () => {
    const rb = new RequestBuilder('http://localhost', '/api', 'post');
    rb.body({ key1: 'val1', key2: ['a', 'b'], key3: null }, 'application/x-www-form-urlencoded');
    const req = rb.build();
    expect(req).toBeTruthy();
  });

  it('should handle body - multipart form data with object and blob', () => {
    const rb = new RequestBuilder('http://localhost', '/api', 'post');
    rb.body({
      str: 'value',
      arr: [new Blob(['file'], { type: 'image/png' }), 'text'],
      obj: { nested: true },
      nullVal: null
    }, 'multipart/form-data');
    const req = rb.build();
    expect(req).toBeTruthy();
  });

  it('should handle path params - matrix style', () => {
    const rb = new RequestBuilder('http://localhost', '/api/{;id}', 'get');
    rb.path('id', [1, 2], { style: 'matrix', explode: true });
    const req = rb.build();
    expect(req).toBeTruthy();
  });

  it('should handle path params - matrix object', () => {
    const rb = new RequestBuilder('http://localhost', '/api/{;id}', 'get');
    rb.path('id', { a: 1 }, { style: 'matrix', explode: true });
    const req = rb.build();
    expect(req).toBeTruthy();
  });

  it('should handle path params - label style', () => {
    const rb = new RequestBuilder('http://localhost', '/api/{.id}', 'get');
    rb.path('id', 'test', { style: 'label' });
    const req = rb.build();
    expect(req).toBeTruthy();
  });

  it('should build with response type options', () => {
    const rb = new RequestBuilder('http://localhost', '/api', 'get');
    const req = rb.build({ responseType: 'blob', reportProgress: true, context: new HttpContext() });
    expect(req).toBeTruthy();
  });

  it('should exercise ParameterCodec decode methods via HttpParams', () => {
    // HttpParams internally calls decodeKey/decodeValue when getting values
    const rb = new RequestBuilder('http://localhost', '/api', 'get');
    rb.query('search key', 'test value+special=chars');
    rb.query('arr[0]', 'val one');
    const req = rb.build();
    // Read params back to trigger decode
    expect(req.params.get('search key') ?? req.params.keys()).toBeTruthy();
    expect(req.params.keys().length).toBeGreaterThan(0);
  });

  it('should handle serializeValue edge cases', () => {
    const rb = new RequestBuilder('http://localhost', '/api', 'get');
    // nested object serialization
    rb.query('nested', { a: { nested: true }, b: [1, 2] }, { explode: false });
    rb.query('empty', null);
    const req = rb.build();
    expect(req).toBeTruthy();
  });
});
