import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {
  imdbID = "";
  film : any; 

  constructor(private filmService: FilmsService, private activateRouter: ActivatedRoute) { }

  ngOnInit() {
    this.imdbID = this.activateRouter.snapshot.paramMap.get("id");
    this.filmService.getDetail(this.imdbID).subscribe(results => { this.film = results});    
  }

}
