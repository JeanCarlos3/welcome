import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare, faMinusSquare, faCompass } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  faPlusSquare = faPlusSquare;
  faMinusSquare = faMinusSquare;
  faSearch = faSearch;
  faCompass = faCompass;


  mostrarliv = false;

  constructor() {

  }

  ngOnInit(): void {
   
  }

  viewDivSelect():void{
    this.mostrarliv = (this.mostrarliv)? false:true;
  }

}
