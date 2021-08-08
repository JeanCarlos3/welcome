import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports:[
    FontAwesomeModule
  ],
  exports: [
     FooterComponent, 
     NavbarComponent
     ]
})
export class SharedModule { }
