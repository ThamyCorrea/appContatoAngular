import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPessoasComponent } from './listar-pessoas.component';

describe('ListarPessoasComponent', () => {
  let component: ListarPessoasComponent;
  let fixture: ComponentFixture<ListarPessoasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPessoasComponent]
    });
    fixture = TestBed.createComponent(ListarPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
