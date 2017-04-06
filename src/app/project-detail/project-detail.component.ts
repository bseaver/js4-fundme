import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string = null;
  thisProject;

  constructor(
    private route:  ActivatedRoute,
    private location: Location,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameter) => {
      this.projectId = urlParameter['id'];
    });

    this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
      this.thisProject = new Project(
        dataLastEmittedFromObserver.category,
        dataLastEmittedFromObserver.title,
        dataLastEmittedFromObserver.description,
        dataLastEmittedFromObserver.goal,
        dataLastEmittedFromObserver.vip
      );
    });
  }

}
