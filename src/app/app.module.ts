import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactformComponent } from './components/contactform/contactform.component';

import { ProjectService } from "./services/projectservice/project.service";

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent }   from './pages/about/about.component';
import { ContactComponent }      from './pages/contact/contact.component';
import { ProjectsComponent }  from './pages/projects/projects.component';
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
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
