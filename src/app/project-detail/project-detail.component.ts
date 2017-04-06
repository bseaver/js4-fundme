import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';

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
    private router: Router,
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

  delete(){
    if (confirm("Are you sure you want to delete?")) {
      this.projectService.deleteProject(this.projectId);
      this.router.navigate(['/']);
    }
  }

  update() {

  }

}
