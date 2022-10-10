import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Togglebar2Component } from './togglebar2.component';

describe('Togglebar2Component', () => {
  let component: Togglebar2Component;
  let fixture: ComponentFixture<Togglebar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Togglebar2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Togglebar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
