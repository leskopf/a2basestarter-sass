import { Component, Input } from "@angular/core";

import { Project } from "../../services/projectservice/project";
import { ProjectService } from "../../services/projectservice/project.service";

@Component ({
  moduleId: module.id,
  selector: 'projectdetail',
  templateUrl: './projectdetail.component.html'
})

export class ProjectDetailComponent {
  @Input() project: Project;
}