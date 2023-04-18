import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraMensualidadHipotecaComponent } from './calculadora-mensualidad-hipoteca.component';

describe('CalculadoraMensualidadHipotecaComponent', () => {
  let component: CalculadoraMensualidadHipotecaComponent;
  let fixture: ComponentFixture<CalculadoraMensualidadHipotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraMensualidadHipotecaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraMensualidadHipotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
