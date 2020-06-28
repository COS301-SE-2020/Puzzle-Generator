import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  
    // otherwise redirect to home
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
