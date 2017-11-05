import { Component } from "@angular/core";

@Component ({
  moduleId: module.id,
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent{
  private projectName:string;
  constructor() {
    this.projectName = "Sysel.org"
  }

}