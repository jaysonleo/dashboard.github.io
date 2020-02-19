import { Component, OnInit } from '@angular/core';
import { faFacebook, faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  facebook = faFacebook;
  github = faGithub;
  linkedIn = faLinkedin;
  twitter = faTwitter;
  instagram = faInstagram;
}
