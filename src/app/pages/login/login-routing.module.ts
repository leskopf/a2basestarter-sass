import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }            from '../../services/auth-guard/auth-guard.service';
import { AuthService }          from '../../services/auth/auth.service';

import { LoginComponent }       from './login.component';
import { AdminHomeComponent }       from '../admin/adminhome/adminhome.component';

const loginRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class LoginRoutingModule {}