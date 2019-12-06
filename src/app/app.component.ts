import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   simpleObservable;

   subscription: Subscription;

   data = null;

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

    this.subscription = this.simpleObservable.subscribe( data => {
      console.log (data);
       this.data = data;
    });

  }

  unsubscribe(){

    this.subscription.unsubscribe()
  }





}
