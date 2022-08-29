import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersOrders1Component } from './customers-orders1.component';

describe('CustomersOrders1Component', () => {
  let component: CustomersOrders1Component;
  let fixture: ComponentFixture<CustomersOrders1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersOrders1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersOrders1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
