import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tut';
  sidebarTitle: string = 'Sidebar title';

  myEventHandler(event){
    console.log( event )
  }
}
