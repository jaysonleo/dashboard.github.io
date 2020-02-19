import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  copyToClipboard(email){
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = email;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }
}
