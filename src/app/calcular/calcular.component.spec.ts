import { ComponentFixture, TestBed } from '@angular/core/testing';

import { calcularComponent } from './calcular.component';

describe('CalcularComponent', () => {
  let component: calcularComponent;
  let fixture: ComponentFixture<calcularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [calcularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(calcularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
