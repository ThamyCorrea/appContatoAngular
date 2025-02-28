import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirContatosComponent } from './exibir-contatos.component';

describe('ExibirContatosComponent', () => {
  let component: ExibirContatosComponent;
  let fixture: ComponentFixture<ExibirContatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibirContatosComponent]
    });
    fixture = TestBed.createComponent(ExibirContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
