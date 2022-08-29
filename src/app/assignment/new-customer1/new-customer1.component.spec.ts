import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomer1Component } from './new-customer1.component';

describe('NewCustomer1Component', () => {
  let component: NewCustomer1Component;
  let fixture: ComponentFixture<NewCustomer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCustomer1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCustomer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
