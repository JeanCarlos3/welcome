import { Component, OnInit } from '@angular/core';
import { faHome, faSearch, faGlobeAmericas, faBars, faCog } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle, faHeart, faUser, faBookmark } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faHome = faHome;
  faBookmark = faHeart;
  faSuitcaseRolling = faBookmark
  faUser = faUser;
  faBars = faBars;
  faUserCircle  = faUserCircle;
  faGlobe = faGlobeAmericas;
  faSearch = faSearch;
  faCog =  faCog;

  /*global*/
  mostrar = true;

  listaIdiomas:string[]=["Español","English","français", "Português"];
  idiomaSeleccionado = "Español";
  constructor() { }

  ngOnInit(): void {
  }

  onClickMe(){
    if (this.mostrar){
        this.mostrar = false
    }
    else{
      this.mostrar = true
    }
  }

}
