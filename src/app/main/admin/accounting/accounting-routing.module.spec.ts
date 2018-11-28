import { AccountingRoutingModule } from './accounting-routing.module';

describe('AccountingRoutingModule', () => {
  let accountingRoutingModule: AccountingRoutingModule;

  beforeEach(() => {
    accountingRoutingModule = new AccountingRoutingModule();
  });

  it('should create an instance', () => {
    expect(accountingRoutingModule).toBeTruthy();
  });
});
