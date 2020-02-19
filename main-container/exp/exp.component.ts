import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent implements OnInit {

  constructor() { }
  exp = [
    {company:'PCCW Solutions Inc.,' ,link: 'job1'},
    {company:'Accenture Inc.,' ,link: 'job2'},
    {company:'Maersk Global Services Ltd.,' ,link: 'job3'}]
  ngOnInit(): void {
  }

}
