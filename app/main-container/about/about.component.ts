import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  technologies = [
    {tech: 'JavaScript (ES6+)'},
    {tech: 'HTML & (S)CSS'},
    {tech: 'Angular'},
    {tech: 'Python'},
    {tech: 'C#'},
    {tech: 'Java Spring boot'}]
  ngOnInit(): void {
  }

}
