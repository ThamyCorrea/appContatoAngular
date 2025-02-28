import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPessoaComponent } from './editar-pessoa.component';

describe('EditarPessoaComponent', () => {
  let component: EditarPessoaComponent;
  let fixture: ComponentFixture<EditarPessoaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPessoaComponent]
    });
    fixture = TestBed.createComponent(EditarPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
