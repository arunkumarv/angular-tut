import { Component, OnInit, EventEmitter, Output, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Output('my-event') myEvent: EventEmitter<string> = new EventEmitter<string>();
  myTitle:string = 'Explorer';
  myList = [];
  constructor() { }

  ngOnInit() {
  }

  buttonClicked(){
    console.log('main.component button clicked')
    this.myEvent.emit ( 'some data' );
  }

  randomString(){
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  addToList(){
    this.myList.push( this.randomString() );  
  }
  onSubmit( form: NgForm ) { 
    console.log ( form ); 
  }

}
