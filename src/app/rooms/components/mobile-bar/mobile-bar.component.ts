import { Component, OnInit } from '@angular/core';
import { faHome, faSearch, faBars, faCog } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle, faHeart, faPlusSquare, faBookmark } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-mobile-bar',
  templateUrl: './mobile-bar.component.html',
  styleUrls: ['./mobile-bar.component.css']
})
export class MobileBarComponent implements OnInit {

  faHome = faHome;
  faBookmark = faHeart;
  faSuitcaseRolling = faBookmark
  faPlusSquare = faPlusSquare;
  faBars = faBars;
  faUserCircle = faUserCircle;
  faSearch = faSearch;
  faCog = faCog;

  constructor() { }

  ngOnInit(): void {

   /* window.onscroll = function () {
      scrollFunction()
    };
    function scrollFunction() {
      let mobile = document.getElementById("mobile");

      if ( (document.documentElement.scrollHeight-800 ) < document.documentElement.scrollTop) {
        mobile!.style.visibility= "hidden";
      } else {
        mobile!.style.visibility = "visible";
      }
    }*/
  }


}
