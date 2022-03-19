import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../services/films.service'; 
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  results: Observable<any>;
  title: string;

  constructor(private navController: NavController) { } 

  ngOnInit() { }

  searchMovie(){
    this.navController.navigateForward(["/films",this.title]);
  }

}