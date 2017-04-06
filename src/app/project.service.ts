import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
     this.projects = angularFire.database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(projectId: string) {
    return this.angularFire.database.object('projects/' + projectId);
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  deleteProject(projectId: string){
    var projectInFirebase = this.getProjectById(projectId);
    projectInFirebase.remove();
  }

  updateProject(projectId: string, localProject: Project) {
    // console.log("project key to edit: " );
    // console.log(this.getProjectById(localProject.$key));
    var projectEntryInFirebase = this.getProjectById(projectId);
    projectEntryInFirebase.update({
      category: localProject.category,
      title: localProject.title,
      description: localProject.description,
      goal: localProject.goal,
      vip: localProject.vip
    });
  }



}
