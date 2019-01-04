import { TestBed, async, inject } from '@angular/core/testing';
import { ContextService } from './context.service';

describe('ContextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ContextService ]
    });
  });

  it('should ...', inject([ ContextService ], (service: ContextService) => {
    expect(service)
      .toBeTruthy();
  }));
});
