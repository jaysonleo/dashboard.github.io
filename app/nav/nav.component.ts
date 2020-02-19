import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

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
