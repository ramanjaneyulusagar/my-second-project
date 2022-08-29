import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardView1Component } from './card-view1.component';

describe('CardView1Component', () => {
  let component: CardView1Component;
  let fixture: ComponentFixture<CardView1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardView1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
