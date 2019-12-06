import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

    const simpleObservable = new Observable( (observer) => {

      observer.next("hello");

      observer.complete();

    });

    simpleObservable.subscribe( data => console.log (data) )

  }


}
