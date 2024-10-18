import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <a [href]="project.html_url" target="_blank" rel="noopener noreferrer" class="group">
        <h3 class="mt-4 text-sm text-gray-700">{{ project.name }}</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">
          {{ project.language }}
        </p>
      </a>
  `
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
