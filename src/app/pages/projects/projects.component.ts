import { Component } from "@angular/core";
import { OnInit } from '@angular/core';

import { Project } from "../../services/projectservice/project"
import { ProjectService } from "../../services/projectservice/project.service";

@Component ({
  moduleId: module.id,
  selector: 'projects',
  templateUrl: './projects.component.html'
})

export class ProjectsComponent implements OnInit  {

  projects: Project[];
  selectedProject: Project;

  constructor(private projectService: ProjectService) { }

  getProjects(): void {
    this.projectService.getProjects().then(projects => this.projects = projects)
  }

  ngOnInit(): void {
    this.getProjects();
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
  }

}