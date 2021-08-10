import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
/*import { FooterComponent } from './footer/footer.component';*/
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
  /*  FooterComponent,*/
    NavbarComponent
  ],
  imports:[
    FontAwesomeModule
  ],
  exports: [
   /*  FooterComponent, */
     NavbarComponent
     ]
})
export class SharedModule { }
