import { Component, OnInit } from '@angular/core';

import { faHeart } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  faHeart = faHeart;
  
  constructor() { }

  ngOnInit(): void {
  }

}
