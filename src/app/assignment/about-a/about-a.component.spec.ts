import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAComponent } from './about-a.component';

describe('AboutAComponent', () => {
  let component: AboutAComponent;
  let fixture: ComponentFixture<AboutAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
