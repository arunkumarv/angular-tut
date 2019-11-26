import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input('sb-title') sbTitle;
  @Input('item-titles') itemTitles;
  
  status: boolean = true;
  birthday = new Date(1988, 3, 15);

  constructor() { }

  ngOnInit() {
  }

  buttonClicked() {
   this.status = !this.status;
  }

}
