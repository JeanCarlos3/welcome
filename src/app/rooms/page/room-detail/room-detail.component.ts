import { AfterViewInit, Component, OnInit } from '@angular/core';

import { faStar} from '@fortawesome/free-regular-svg-icons';
import { faSmokingBan, faPaw} from '@fortawesome/free-solid-svg-icons';

import { HomeScrollService } from '../../services/home-scroll.service';

@Component({
  selector: 'app-room',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements AfterViewInit {

  faStar = faStar;
  faPaw = faPaw;
  faSmokingBan = faSmokingBan;
  
  constructor( private scrollservice: HomeScrollService) { }

  ngAfterViewInit(): void {

   /* this.scrollservice.reserva();*/
  }

}
