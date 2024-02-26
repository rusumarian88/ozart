import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  constructor(
    public experienceService:ExperienceService,
    public blogService:BlogService,
    public projectsService:ProjectsService,

  ) { }

  ngOnInit(): void {
  }

}
