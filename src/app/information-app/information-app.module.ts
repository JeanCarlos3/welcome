import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationAppRoutingModule } from './information-app-routing.module';
import { HelpInfoComponent } from './page/help-info/help-info.component';
import { AboutInfoComponent } from './page/about-info/about-info.component';
import { SocioInfoComponent } from './page/socio-info/socio-info.component';
import { NavInfoComponent } from './components/nav-info/nav-info.component';

import { SharedModule} from '../shared/shared.module'

@NgModule({
  declarations: [
    HelpInfoComponent,
    AboutInfoComponent,
    SocioInfoComponent,
    NavInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InformationAppRoutingModule
  ],
  exports: [
    SharedModule
  ]
})
export class InformationAppModule { }
