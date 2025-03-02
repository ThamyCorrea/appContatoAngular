import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarContatosComponent } from './listar-contatos.component';

describe('ListarContatosComponent', () => {
  let component: ListarContatosComponent;
  let fixture: ComponentFixture<ListarContatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarContatosComponent]
    });
    fixture = TestBed.createComponent(ListarContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
