import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraFiftythirtyComponent } from './calculadora-fiftythirty.component';

describe('CalculadoraFiftythirtyComponent', () => {
  let component: CalculadoraFiftythirtyComponent;
  let fixture: ComponentFixture<CalculadoraFiftythirtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraFiftythirtyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraFiftythirtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
