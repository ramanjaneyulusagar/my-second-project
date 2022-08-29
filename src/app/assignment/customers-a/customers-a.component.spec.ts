import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersAComponent } from './customers-a.component';

describe('CustomersAComponent', () => {
  let component: CustomersAComponent;
  let fixture: ComponentFixture<CustomersAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
