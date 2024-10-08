import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleLogoComponent } from './title-logo.component';

describe('TitleLogoComponent', () => {
  let component: TitleLogoComponent;
  let fixture: ComponentFixture<TitleLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleLogoComponent]
    });
    fixture = TestBed.createComponent(TitleLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
