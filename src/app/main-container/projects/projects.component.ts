import { Component, OnInit } from '@angular/core';
import { faFolder,faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  folder = faFolder;
  externalLink = faExternalLinkAlt;
  ngOnInit(): void {
  }

}
