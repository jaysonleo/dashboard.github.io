import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainContainerComponent } from './main-container/main-container.component';
import { IntroComponent } from './main-container/intro/intro.component';
import { AboutComponent } from './main-container/about/about.component';
import { ExpComponent } from './main-container/exp/exp.component';
import { ProjectsComponent } from './main-container/projects/projects.component';
import { ContactComponent } from './main-container/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidenavComponent,
    MainContainerComponent,
    IntroComponent,
    AboutComponent,
    ExpComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
