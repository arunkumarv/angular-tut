import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   simpleObservable;

  ngOnInit(): void {

  }

  initialise(){

    this.simpleObservable = new Observable( (observer) => {

      setInterval ( () => {

        observer.next( Math.random() );

      }, 1000 );

    });
  }

  subscribe (){

    this.simpleObservable.subscribe( data => console.log (data) );

  }





}
