import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-rooms-carousel',
  templateUrl: './rooms-carousel.component.html',
  styleUrls: ['./rooms-carousel.component.css']
})
export class RoomsCarouselComponent implements OnInit {

  rooms: number[] = [1,2,3,4,5,6,7,8];

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

  constructor() { }

  ngOnInit(): void {
  }

}
