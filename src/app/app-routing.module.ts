import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'rooms',
    loadChildren: () => import('./rooms/rooms.module').then (m => m.RoomsModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./information-app/information-app.module').then (m => m.InformationAppModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then (m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'rooms'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
