import { appConfig } from './app.config';

describe('AppConfig', () => {
  it('should create the app config', () => {
    expect(appConfig).toBeTruthy();
    expect(appConfig.providers.length).toBeGreaterThan(0);
  });
});
