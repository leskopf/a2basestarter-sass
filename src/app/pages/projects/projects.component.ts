import { Component } from "@angular/core";

@Component ({
  moduleId: module.id,
  selector: 'projects',
  templateUrl: './projects.component.html'
})

export class ProjectsComponent{
  private projectName:string;
  constructor() {
    this.projectName = "Sysel.org"
  }

}