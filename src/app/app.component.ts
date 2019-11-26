import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tut';
  sidebarTitle: string = 'Sidebar title';
  itemTitles: Array<string> = [ 'TitleOne', 'TitleTwo', 'TitleThree', 'TitleFour', 'TitleFive' ];

  selectedItemTitle:string = null;

  myEventHandler(event){
    console.log( event )
  }

  sidebarEventHandler(event){
    this.selectedItemTitle = event;
  }

}
