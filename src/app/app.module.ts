import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactformComponent } from './components/contactform/contactform.component';

import { ProjectService } from "./services/projectservice/project.service";
import { AuthService } from "./services/auth/auth.service";
import { AuthGuard } from "./services/auth-guard/auth-guard.service";

import { AdminComponent } from './pages/admin/admin.component';
import { AdminHomeComponent } from './pages/admin/adminhome/adminhome.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent }   from './pages/about/about.component';
import { ContactComponent }      from './pages/contact/contact.component';
import { ProjectsComponent }  from './pages/projects/projects.component';
import { ProjectDetailComponent }  from './pages/projectdetail/projectdetail.component';
import { LoginComponent }  from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ContactformComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    LoginComponent,
    AdminComponent,
    AdminHomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ProjectService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
