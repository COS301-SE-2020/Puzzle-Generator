import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePuzzlesDialogComponent } from './profile-puzzles-dialog.component';

describe('ProfilePuzzlesDialogComponent', () => {
  let component: ProfilePuzzlesDialogComponent;
  let fixture: ComponentFixture<ProfilePuzzlesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePuzzlesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePuzzlesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
