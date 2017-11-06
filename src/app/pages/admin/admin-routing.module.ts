import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent}   from '../../pages/home/home.component';
import {AboutComponent}   from '../../pages/about/about.component';
import {ContactComponent}      from '../../pages/contact/contact.component';
import {ProjectsComponent}  from '../../pages/projects/projects.component';
import {LoginComponent}  from '../../pages/login/login.component';
import {AdminComponent}  from '../../pages/admin/admin.component';
import {AdminHomeComponent}  from '../../pages/admin/adminhome/adminhome.component';

import {AuthGuard} from '../../services/auth-guard/auth-guard.service';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {path: '', component: AdminHomeComponent},
          {path: 'dashboard', component: AdminHomeComponent},
          {path: 'projects', component: ProjectsComponent}

        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}