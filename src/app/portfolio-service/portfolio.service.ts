import { Injectable } from '@angular/core';
import { MyProject } from '../my-project';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  getMyProjects() {
    return MyProject;
  }
  
  constructor() { }
}
