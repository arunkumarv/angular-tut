import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input('sb-title') sbTitle;
  status: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  buttonClicked() {
   this.status = !this.status;
  }

}
