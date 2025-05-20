import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'accounts',component: RegistrationComponent },
  {path:'homepage',component: HomepageComponent} ,
  {path:'profile',component: UserProfileComponent},
  {path: 'email-verification', component: EmailVerificationComponent},
  {path:'about', component:AboutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
