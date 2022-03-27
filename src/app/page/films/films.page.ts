import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  args = "";  
  results: any;

  constructor(private fimlsSevices: FilmsService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.args = this.activateRoute.snapshot.paramMap.get("title");
    this.fimlsSevices.searchMovie(this.args).subscribe(async results => { this.results = results } );    
  }

}
