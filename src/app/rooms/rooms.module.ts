import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/**routing */
import { RoomsRoutingModule } from './rooms-routing.module';

/**component */
import { ListComponent } from './page/list/list.component';
import { HomeComponent } from './page/home/home.component';
import { ReservationsComponent } from './page/reservations/reservations.component';
import { RoomDetailComponent } from './page/room-detail/room-detail.component';
/*import { NavbarComponent } from '../shared/navbar/navbar.component';*/
import { FavoritesComponent } from './page/favorites/favorites.component';
import { SearchComponent } from './components/search/search.component';
import { MobileBarComponent } from './components/mobile-bar/mobile-bar.component';
import { MobileFilterComponent } from './components/mobile-filter/mobile-filter.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MapComponent } from './components/map/map.component';

import { SharedModule} from '../shared/shared.module'
import { FooterComponent } from '../shared/footer/footer.component';

@NgModule({
  declarations: [
    ListComponent,
    SearchComponent,
    HomeComponent,
    RoomDetailComponent,
    MobileBarComponent,
    MobileFilterComponent,
    CarouselComponent,
    MapComponent,
    FavoritesComponent,
    ReservationsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    FontAwesomeModule,
    RoomsRoutingModule,
    SharedModule
  ],
  exports: [
    SharedModule
  ]
})
export class RoomsModule { }
