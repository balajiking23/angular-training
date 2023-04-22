import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'signup', component: SignUpComponent,
  },
  {
    path:'login', component: LoginComponent,
  },
  {
    path:'forgetPassword', component: ForgetPasswordComponent,
  },
  {
    path:'profile', component: UserProfileComponent,
  },
  {
    path:'', component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
