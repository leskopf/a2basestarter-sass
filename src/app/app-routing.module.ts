import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent}   from './pages/home/home.component';
import {AboutComponent}   from './pages/about/about.component';
import {ContactComponent}      from './pages/contact/contact.component';
import {ProjectsComponent}  from './pages/projects/projects.component';
import {LoginComponent}  from './pages/login/login.component';
import {AdminComponent}  from './pages/admin/admin.component';
import {AdminHomeComponent}  from './pages/admin/adminhome/adminhome.component';

import {AuthGuard} from './services/auth-guard/auth-guard.service';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'login', component: LoginComponent},
    {path: 'projects', component: ProjectsComponent},
    // otherwise redirect to home
    {path: '**', redirectTo: ''},
    {
      path: 'admin',
      component: AdminComponent,
      canActivate: [AuthGuard],
      children: [
        {
          path: '',
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}