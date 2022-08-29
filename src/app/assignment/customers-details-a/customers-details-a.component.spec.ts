import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersDetailsAComponent } from './customers-details-a.component';

describe('CustomersDetailsAComponent', () => {
  let component: CustomersDetailsAComponent;
  let fixture: ComponentFixture<CustomersDetailsAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersDetailsAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersDetailsAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
