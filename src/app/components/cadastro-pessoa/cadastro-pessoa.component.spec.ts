import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPessoaComponent } from './cadastro-pessoa.component';

describe('CadastroPessoaComponent', () => {
  let component: CadastroPessoaComponent;
  let fixture: ComponentFixture<CadastroPessoaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroPessoaComponent]
    });
    fixture = TestBed.createComponent(CadastroPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
