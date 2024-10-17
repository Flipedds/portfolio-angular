import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { Project } from './project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  private projectsService = inject(ProjectsService)

  projects: Project[] = []

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe(projects => 
      this.projects = projects)
  }
}
