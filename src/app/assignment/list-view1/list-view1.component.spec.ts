import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListView1Component } from './list-view1.component';

describe('ListView1Component', () => {
  let component: ListView1Component;
  let fixture: ComponentFixture<ListView1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListView1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
