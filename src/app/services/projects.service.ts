import { Injectable } from '@angular/core';

export interface Project{
  title?:string;
  info?:string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects=[
    {
      title:"750+",
      info:"Completed Projects"
    },
    {
      title:"15+",
      info:"On going projects"
    },
    {
      title:"250+",
      info:"Awards"
    },
    {
      title:"700+",
      info:"Happy Clients"
    },
  ]

  constructor() { }
}
