import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersAComponent } from './orders-a.component';

describe('OrdersAComponent', () => {
  let component: OrdersAComponent;
  let fixture: ComponentFixture<OrdersAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
