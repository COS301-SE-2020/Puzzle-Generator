import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfilePuzzlesComponent } from './pages/profile-puzzles/profile-puzzles.component'
import { ProfileRatingsComponent } from './pages/profile-ratings/profile-ratings.component'
import { ProfileSolvedPuzzlesComponent } from './pages/profile-solved-puzzles/profile-solved-puzzles.component'
import { RatingsComponent } from './pages/ratings/ratings.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ResetSuccessComponent } from './pages/reset-success/reset-success.component';
import { CreateComponent } from './pages/create/create.component';
import { AICreateComponent } from './pages/aicreate/aicreate.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { AdminRatingsComponent } from './admin/admin-ratings/admin-ratings.component';
import { AdminPuzzlesComponent } from './admin/admin-puzzles/admin-puzzles.component';
import {MatTableDataSource} from '@angular/material/table';


const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profilePuzzles', component: ProfilePuzzlesComponent},
  {path: 'profileRatings', component: ProfileRatingsComponent},
  {path: 'profileSolvedPuzzle', component: ProfileSolvedPuzzlesComponent},
  {path: 'ratings', component: RatingsComponent},
  {path: 'resetPassword', component: ResetPasswordComponent},
  {path: 'resetSuccess', component: ResetSuccessComponent},
  {path: 'create', component: CreateComponent},
  {path: 'aicreate', component: AICreateComponent},
  {path: 'adminUser', component: AdminUserComponent},
  {path: 'adminRatings', component: AdminRatingsComponent},
  {path: 'adminPuzzles', component: AdminPuzzlesComponent}, 


    // otherwise redirect to home
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
