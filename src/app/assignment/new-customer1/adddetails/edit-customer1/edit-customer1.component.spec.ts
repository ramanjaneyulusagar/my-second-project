import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomer1Component } from './edit-customer1.component';

describe('EditCustomer1Component', () => {
  let component: EditCustomer1Component;
  let fixture: ComponentFixture<EditCustomer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCustomer1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCustomer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
