import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GitFormComponent } from './git-form/git-form.component';
import { GitResultsComponent } from './git-results/git-results.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'project', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gitForm', component: GitFormComponent },
  { path: 'gitResults', component: GitResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
