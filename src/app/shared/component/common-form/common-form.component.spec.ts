import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFormComponent } from './common-form.component';

describe('AuthFormComponent', () => {
  let component: CommonFormComponent;
  let fixture: ComponentFixture<CommonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
