import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPessoaComponent } from './cadastrar-pessoa.component';

describe('CadastrarPessoaComponent', () => {
  let component: CadastrarPessoaComponent;
  let fixture: ComponentFixture<CadastrarPessoaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarPessoaComponent]
    });
    fixture = TestBed.createComponent(CadastrarPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
