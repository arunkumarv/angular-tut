import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comp-four',
  templateUrl: './comp-four.component.html',
  styleUrls: ['./comp-four.component.css']
})
export class CompFourComponent implements OnInit {

  searchQuery = null;
  constructor( private router: Router, private activatedroute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedroute.queryParams.subscribe (
      params => this.searchQuery = params.q
    )
  }

  search( q: string ){
    this.router.navigate(['/comp-four'], { queryParams: { q : q } })
  }

}
