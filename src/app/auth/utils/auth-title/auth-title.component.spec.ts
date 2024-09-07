import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTitleComponent } from './auth-title.component';

describe('AuthTitleComponent', () => {
  let component: AuthTitleComponent;
  let fixture: ComponentFixture<AuthTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
