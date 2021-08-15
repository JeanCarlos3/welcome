import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
/*import { FooterComponent } from './footer/footer.component';*/
import { NavbarComponent } from './navbar/navbar.component';
import { SubscriptionComponent } from './subscription/subscription.component';


@NgModule({
  declarations: [
  /*  FooterComponent,*/
    NavbarComponent,
    SubscriptionComponent
  ],
  imports:[
    FontAwesomeModule
  ],
  exports: [
   /*  FooterComponent, */
     NavbarComponent,
     SubscriptionComponent
     ]
})
export class SharedModule { }
