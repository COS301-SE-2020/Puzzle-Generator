import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RatingsComponent } from './pages/ratings/ratings.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ResetSuccessComponent } from './pages/reset-success/reset-success.component';
import { RateFormComponent } from './pages/rate-form/rate-form.component';
import { CreateComponent } from './pages/create/create.component';


const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'ratings', component: RatingsComponent},
  {path: 'resetPassword', component: ResetPasswordComponent},
  {path: 'resetSuccess', component: ResetSuccessComponent},
  {path: 'rateForm', component: RateFormComponent},
  {path: 'create', component: CreateComponent},

    // otherwise redirect to home
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
