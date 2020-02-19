import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  constructor() { }
  pages = [
    {content: 'About' , link: '#about'},
    {content: 'Work Experience' , link: '#exp'},
    {content: 'Other Projects' , link: '#other'},
    {content: 'Contact' , link: '#contact'},
  ];
  ngOnInit(): void {
  }

}
