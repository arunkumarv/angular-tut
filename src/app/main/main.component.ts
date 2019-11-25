import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Output('my-event') myEvent: EventEmitter<string> = new EventEmitter<string>();
  myTitle:string = 'Explorer';
  constructor() { }

  ngOnInit() {
  }

  buttonClicked(){
    console.log('main.component button clicked')
    this.myEvent.emit ( 'some data' );
  }

}
