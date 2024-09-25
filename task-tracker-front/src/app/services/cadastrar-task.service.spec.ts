import { TestBed } from '@angular/core/testing';

import { CadastrarTaskService } from './cadastrar-task.service';

describe('CadastrarTaskService', () => {
  let service: CadastrarTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
