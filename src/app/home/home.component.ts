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
  projects: FirebaseListObservable<any[]>;
  filterByCategory = 'all';
  newForm = false;
  newCategory = 'Children';

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    console.log(this.projects);
  }

  checkDetails(thisProject) {
    this.router.navigate(['projects', thisProject.$key]);
  }

  filterChange(chosen) {
    this.filterByCategory = chosen;
  }

  showNewForm() {
    this.newForm = true;
  }

  submitForm(newTitle: string, newDescription: string, newGoal: number, newVip: string) {
    const newProject = new Project(
      this.newCategory,
      newTitle,
      newDescription,
      newGoal,
      newVip
    );

    this.projectService.addProject(newProject);

    this.newForm = false;
  }

  selectCategory(newCategory: string) {
    this.newCategory = newCategory;
    console.log("selectCategory: " + this.newCategory);
  }

}
