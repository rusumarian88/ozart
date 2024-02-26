import { Injectable } from '@angular/core';

export interface Skil{
  title?:string;
  description?:string;
  buttonn?:string;
  icon?:string;

}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  skils=[
    {
      title:"Ui & UX Design",
      description:"User interface design, user experience design, user research.",
      button:"Read more",
      icon:"/assets/icon-right-big.png",
    },
    {
      title:"Graphic Design",
      description:"User interface design, user experience design, user research.",
      button:"Read more",
      icon:"/assets/icon-right-big.png",
    },
    {
      title:"Web Development",
      description:"User interface design, user experience design, user research.",
      button:"Read more",
      icon:"/assets/icon-right-big.png",
    },
  ]

  constructor() { }
}
