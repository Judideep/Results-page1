import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundCompoundComponent } from './page-not-found-compound/page-not-found-compound.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/login',
    pathMatch:'full',
    data: { title: 'Admin Login : ' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Admin Login : ' }
  },
 {
    path: 'home-page',
    component: IndexPageComponent,
    canActivate : [AuthGuard],
    data: { title: 'Asset Management page : ' }
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: { title: 'forgot-password page : ' }
  },
 {
    path: 'reset-password/:adminUniq',
    component: ResetPasswordComponent,
    data: { title: 'reset-password page : ' }
  },
  {
    path: '**',
    component: PageNotFoundCompoundComponent,
    data: { title: 'PageNotfoundComponent : ' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
