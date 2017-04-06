import { Component, OnInit } from '@angular/core';
import { Project } from './../project.model';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from './../project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProjectService]
})
export class HomeComponent implements OnInit {
  projects;
  filterByCategory = 'all';

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(dataLastEmittedFromObserver => {
      this.projects = dataLastEmittedFromObserver;
      console.log(this.projects);
    });
  }
  checkDetails(thisProject) {
    this.router.navigate(['projects', thisProject.$key]);
  }

  filterChange(chosen) {
    this.filterByCategory = chosen;
  }

}
