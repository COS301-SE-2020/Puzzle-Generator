import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePuzzlesComponent } from './profile-puzzles.component';

describe('ProfilePuzzlesComponent', () => {
  let component: ProfilePuzzlesComponent;
  let fixture: ComponentFixture<ProfilePuzzlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePuzzlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePuzzlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
