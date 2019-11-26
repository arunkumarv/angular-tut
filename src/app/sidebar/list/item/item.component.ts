import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() title;
  constructor( private appservice: AppService ) { }

  ngOnInit() {
  }

  notifyMain(){
    console.log(this.title)
    this.appservice.broadcast(this.title);
  }

}
