import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {

  @Input() title:string=""
  @Input() description:string=""
  @Input() button:string=""
  @Input() icon:string=""


  constructor() { }

  ngOnInit(): void {
  }

}
