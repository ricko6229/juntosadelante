import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraMensualidadDeAutomovilComponent } from './calculadora-mensualidad-automovil.component';

describe('CalculadoraMensualidadAutomovilComponent', () => {
  let component: CalculadoraMensualidadDeAutomovilComponent;
  let fixture: ComponentFixture<CalculadoraMensualidadDeAutomovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraMensualidadDeAutomovilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraMensualidadDeAutomovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
