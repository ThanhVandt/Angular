import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninpageComponent } from './signinpage.component';

describe('SigninpageComponent', () => {
  let component: SigninpageComponent;
  let fixture: ComponentFixture<SigninpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninpageComponent]
    });
    fixture = TestBed.createComponent(SigninpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
