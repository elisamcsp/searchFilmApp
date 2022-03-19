import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  // // {
  // //   path: 'films/:title',
  // //   loadChildren: () => import('./page/films/films.module').then( m => m.FilmsPageModule)
  // // },
  // {
  //   path: 'films/detail/:id',
  //   loadChildren: () => import('./page/film-details/film-details.module').then( m => m.FilmDetailsPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
