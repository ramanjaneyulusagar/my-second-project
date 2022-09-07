import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnclickcustomerdataComponent } from './onclickcustomerdata.component';

describe('OnclickcustomerdataComponent', () => {
  let component: OnclickcustomerdataComponent;
  let fixture: ComponentFixture<OnclickcustomerdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnclickcustomerdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnclickcustomerdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
