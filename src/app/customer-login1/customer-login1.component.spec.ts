import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLogin1Component } from './customer-login1.component';

describe('CustomerLogin1Component', () => {
  let component: CustomerLogin1Component;
  let fixture: ComponentFixture<CustomerLogin1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerLogin1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerLogin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
