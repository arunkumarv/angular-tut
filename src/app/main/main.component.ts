import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Output('my-event') myEvent: EventEmitter<string> = new EventEmitter<string>();
  myTitle:string = 'Explorer';
  myList = [];
  name:string = "Arun"
  @ViewChild('f') myForm;
  message: string = null;

  constructor( private appservice: AppService ) {
    this.appservice.eventemitter.subscribe( (message: string) => this.message = message );
  }

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

  onSubmit() { 
    console.log ( this.myForm ); 
  }

}
