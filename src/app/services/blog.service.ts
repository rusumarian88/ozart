import { Text } from '@angular/compiler';
import { Injectable } from '@angular/core';

export interface Blog{
  photo?:string;
  comments?:string;
  likes?:string;
  name?:string;
  title?:string;
  button?:string;
  icon?:string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs=[
    {
      photo:"/assets/img-blog1.png",
      comments:"25 comments",
      likes:"17 Likes",
      name:"By Adams",
      title:"Design is not just color it speaks visually...",
      button:"read more",
      icon:"/assets/icon-blog-card.png"
    },
    {
      photo:"/assets/img-blog2.png",
      comments:"25 comments",
      likes:"17 Likes",
      name:"By Adams",
      title:"Design is not just color it speaks visually...",
      button:"read more",
      icon:"/assets/icon-blog-card.png"
    },
    {
      photo:"/assets/img-blog3.png",
      comments:"25 comments",
      likes:"17 Likes",
      name:"By Adams",
      title:"Design is not just color it speaks visually...",
      button:"read more",
      icon:"/assets/icon-blog-card.png"
    },
  ]

  constructor() { }
}

