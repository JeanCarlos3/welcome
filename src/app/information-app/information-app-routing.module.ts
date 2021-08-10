import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*components*/
import { HelpInfoComponent } from './page/help-info/help-info.component';
import { AboutInfoComponent } from './page/about-info/about-info.component';
import { SocioInfoComponent } from './page/socio-info/socio-info.component';

const routes: Routes = [
  { path:'',
    children: [
      { path: 'help', component: HelpInfoComponent },
      { path: 'socios', component: SocioInfoComponent },
      { path: 'about', component: AboutInfoComponent },
      { path: '**', redirectTo: 'about' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationAppRoutingModule { }
