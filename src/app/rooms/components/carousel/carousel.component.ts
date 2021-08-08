import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { faStar, faBed, faBath, faTv} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  
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
            items: 4
        }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
