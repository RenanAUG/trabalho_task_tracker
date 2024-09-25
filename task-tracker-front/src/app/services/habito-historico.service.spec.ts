import { TestBed } from '@angular/core/testing';

import { HabitoHistoricoService } from './habito-historico.service';

describe('HabitoHistoricoService', () => {
  let service: HabitoHistoricoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitoHistoricoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
