import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersDetails1Component } from './customers-details1.component';

describe('CustomersDetails1Component', () => {
  let component: CustomersDetails1Component;
  let fixture: ComponentFixture<CustomersDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersDetails1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
