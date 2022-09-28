import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglebarComponent } from './togglebar.component';

describe('TogglebarComponent', () => {
  let component: TogglebarComponent;
  let fixture: ComponentFixture<TogglebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogglebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogglebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
