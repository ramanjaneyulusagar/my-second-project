import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Togglebar1Component } from './togglebar1.component';

describe('Togglebar1Component', () => {
  let component: Togglebar1Component;
  let fixture: ComponentFixture<Togglebar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Togglebar1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Togglebar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
