import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private http = inject(HttpClient)
  constructor() { }

  getProjects() {
    return this.http.get<Project[]>("https://api.github.com/users/Flipedds/repos?per_page=50&sort=created")
  }
}
