import { Component, OnInit } from '@angular/core';
import { faStar} from '@fortawesome/free-regular-svg-icons';
import { faSmokingBan, faPaw} from '@fortawesome/free-solid-svg-icons';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-room',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

  faStar = faStar;
  faPaw = faPaw;
  faSmokingBan = faSmokingBan;
  
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
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
