import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-comp-four',
  templateUrl: './comp-four.component.html',
  styleUrls: ['./comp-four.component.css']
})
export class CompFourComponent implements OnInit {

  searchQuery = null;
  results: any = null;

  constructor( private router: Router, private activatedroute: ActivatedRoute,private httpclient: HttpClient ) { }

  ngOnInit() {
    this.activatedroute.queryParams.subscribe (
      params => {
        console.log ( params )
        this.searchQuery = params.q;
        
        // https://rapidapi.com/apilayernet/api/rest-countries-v1
        const httpOptions = {
          headers: new HttpHeaders({
            "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
            "x-rapidapi-key": "5879dce226msh0766ccc17ef4b0ep101060jsnb8970b99cd18"
          })
        };

        this.httpclient.get('https://restcountries-v1.p.rapidapi.com/name/'+params.q, httpOptions ).subscribe (
          response => {
            console.log ( response )
            this.results = response
          }
        )
      }
    )
  }

  search( q: string ){
    this.router.navigate(['/comp-four'], { queryParams: { q : q } })
  }

}
