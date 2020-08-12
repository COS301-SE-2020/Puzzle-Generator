import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';


//pages
import { IndexComponent } from './pages/index/index.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RatingsComponent } from './pages/ratings/ratings.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ResetSuccessComponent } from './pages/reset-success/reset-success.component';
import { CreateComponent } from './pages/create/create.component';
import { RateDialogComponent } from './rate-dialog/rate-dialog.component';
import { ProfilePuzzlesComponent } from './pages/profile-puzzles/profile-puzzles.component';
import { ProfileRatingsComponent } from './pages/profile-ratings/profile-ratings.component';
import { AICreateComponent } from './pages/aicreate/aicreate.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    RatingsComponent,
    NavbarComponent,
    ResetPasswordComponent,
    ResetSuccessComponent,
    CreateComponent,
    RateDialogComponent,
    ProfilePuzzlesComponent,
    ProfileRatingsComponent,
    AICreateComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatInputModule, MatListModule,
    MatCardModule, MatFormFieldModule, MatDialogModule, MatGridListModule, MatRadioModule, ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  entryComponents: [RateDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
