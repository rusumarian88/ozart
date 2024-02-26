import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input() photo:string=""
  @Input() comments:string=""
  @Input() likes:string=""
  @Input() name:string=""
  @Input() title:string=""
  @Input() button:string=""
  @Input() icon:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
