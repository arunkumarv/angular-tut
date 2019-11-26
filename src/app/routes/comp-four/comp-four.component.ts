import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp-four',
  templateUrl: './comp-four.component.html',
  styleUrls: ['./comp-four.component.css']
})
export class CompFourComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  search( q: string ){
    this.router.navigate(['/comp-four'], { queryParams: { q : q } })
  }

}
