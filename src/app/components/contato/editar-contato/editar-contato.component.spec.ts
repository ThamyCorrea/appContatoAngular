import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarContatoComponent } from './editar-contato.component';

describe('EditarContatoComponent', () => {
  let component: EditarContatoComponent;
  let fixture: ComponentFixture<EditarContatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarContatoComponent]
    });
    fixture = TestBed.createComponent(EditarContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
