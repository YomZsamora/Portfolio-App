import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    new Project('First Project', 'Bookstore app for client', 'UI/UX', '10/07/2020'),
    new Project('Second Project', 'E-commerce app for client', 'Frontend', '01/11/2019'),
    new Project('Third Project', 'Boutique app for client', 'Backend', '21/01/2021'),
  ]

  deleteThisProject(deleteProject, index) {
    if(deleteProject) {
      this.projects.splice(index, 1);
    }
  }

  showDetails(index) {
    this.projects[index].showProjectDetails = !this.projects[index].showProjectDetails;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
