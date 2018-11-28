import { RecieptModule } from './reciept.module';

describe('RecieptModule', () => {
  let recieptModule: RecieptModule;

  beforeEach(() => {
    recieptModule = new RecieptModule();
  });

  it('should create an instance', () => {
    expect(recieptModule).toBeTruthy();
  });
});
