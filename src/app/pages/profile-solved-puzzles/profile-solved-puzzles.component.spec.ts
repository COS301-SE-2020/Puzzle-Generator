import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSolvedPuzzlesComponent } from './profile-solved-puzzles.component';

describe('ProfileSolvedPuzzlesComponent', () => {
  let component: ProfileSolvedPuzzlesComponent;
  let fixture: ComponentFixture<ProfileSolvedPuzzlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSolvedPuzzlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSolvedPuzzlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
