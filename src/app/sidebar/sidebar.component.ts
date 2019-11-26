import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input('sb-title') sbTitle;
  @Input('item-titles') itemTitles;
  @Output() myEvent: EventEmitter<string> = new EventEmitter<string>();
  
  status: boolean = true;
  birthday = new Date(1988, 3, 15);

  constructor() { }

  ngOnInit() {
  }

  buttonClicked() {
   this.status = !this.status;
  }

  handleEvent(e){
    console.log(e);
    this.myEvent.emit(e);
  }

}
