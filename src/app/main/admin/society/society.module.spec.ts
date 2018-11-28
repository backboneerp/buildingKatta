import { SocietyModule } from './society.module';

describe('SocietyModule', () => {
  let societyModule: SocietyModule;

  beforeEach(() => {
    societyModule = new SocietyModule();
  });

  it('should create an instance', () => {
    expect(societyModule).toBeTruthy();
  });
});
