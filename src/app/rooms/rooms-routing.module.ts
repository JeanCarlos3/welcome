import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './page/list/list.component';
import { HomeComponent } from './page/home/home.component';
import { RoomDetailComponent } from './page/room-detail/room-detail.component';
import { FavoritesComponent } from './page/favorites/favorites.component';
import { ReservationsComponent } from './page/reservations/reservations.component';

const routes: Routes = [
  { 
  
    path:'', 
    children: [
      { path:'home', component: HomeComponent },
      { path:'list', component: ListComponent },     
      { path:'detail', component: RoomDetailComponent },
      { path:'favorite', component: FavoritesComponent },
      { path:'reserva', component: ReservationsComponent },
      { path:'**', redirectTo: 'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
