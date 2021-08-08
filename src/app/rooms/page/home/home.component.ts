import { Component, AfterViewInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { faStar, faBed, faBath, faTv} from '@fortawesome/free-solid-svg-icons';

/*service*/
import { HomeScrollService } from '../../services/home-scroll.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit { 

  faStar = faStar;
  faBed = faBed;
  faBath = faBath;
  faTv = faTv;

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false, 
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
  }

  /**************************************************/
  customOptions2: OwlOptions = {
    loop: true,
    dots: false,
    margin: 10,
    nav: false,    
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1.3
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
  }
  

  constructor( private scrollService: HomeScrollService) { }

  ngAfterViewInit(): void {
    this.scrollService.metodo();
  }
}
