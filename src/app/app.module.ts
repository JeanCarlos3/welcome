import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { RoomsModule } from '../app/rooms/rooms.module'

/*components*/
import { AppComponent } from './app.component';
/*import { FooterComponent } from 'src/app/shared/footer/footer.component';*/
/*import { FavoritesComponent } from './shared/favorites/favorites.component';*/


@NgModule({
  declarations: [
    AppComponent,
   /* FooterComponent,*/
  /*  FavoritesComponent,*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //  RoomsModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
