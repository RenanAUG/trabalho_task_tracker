import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTaskComponent } from './cadastrar-task.component';

describe('CadastrarTaskComponent', () => {
  let component: CadastrarTaskComponent;
  let fixture: ComponentFixture<CadastrarTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
