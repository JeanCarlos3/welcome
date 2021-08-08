import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  faPlusSquare = faPlusSquare;
  faMinusSquare = faMinusSquare;
  faSearch = faSearch;
  showMe: boolean = false;

  numeroHabitaciones: number = 1;
  numeroCamas: number = 1;
  adultos: number = 0;
  ninos: number = 0;
  bebes: number = 0;

  constructor() {

  }

  ngOnInit(): void {
   
  /*  window.onscroll = function () { 
      scrollFunction2()
    };*/

   /* function scrollFunction2() {
      let navSearch = document.getElementById("nav-search");

      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        navSearch!.style.display = "flex";
      } else
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
          navSearch!.style.position = "fixed";
           navSearch!.style.display = "flex";
        } else {
          navSearch!.style.position = "relative";
          navSearch!.style.display = "none";
        }
    }*/
  }
  addHabitacion() {
    this.numeroHabitaciones += 1;
  }
  delectHabitacion() {
    if (this.numeroHabitaciones >= 2) {
      this.numeroHabitaciones -= 1;
    }
    else {
      alert('Debe existir una habitacion');
    }
  }
  addCama() {
    this.numeroCamas += 1;
  }
  delectCama() {
    if (this.numeroCamas >= 2) {
      this.numeroCamas -= 1;
    }
    else {
      alert('Debe haber una cama');
    }
  }
  addAdulto() {
    this.adultos += 1;
  }
  delectAdulto() {
    this.adultos -= 1;
  }
  addNino() {
    this.ninos += 1;
  }
  delectNino() {
    this.ninos -= 1;
  }
  addBebe() {
    this.bebes += 1;
  }
  delectBebe() {
    this.bebes -= 1;
  }

}
