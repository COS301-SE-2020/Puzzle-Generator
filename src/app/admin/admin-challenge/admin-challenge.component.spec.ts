import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChallengeComponent } from './admin-challenge.component';

describe('AdminChallengeComponent', () => {
  let component: AdminChallengeComponent;
  let fixture: ComponentFixture<AdminChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
