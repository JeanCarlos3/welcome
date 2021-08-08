import { Component, OnInit } from '@angular/core';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-regular-svg-icons';


export class SearchComponent2 implements OnInit {

  faPlusSquare = faPlusSquare;
  faMinusSquare = faMinusSquare;
  showMe: boolean = false;

  numeroHabitaciones: number = 1;
  numeroCamas: number = 1;
  adultos: number = 0;
  ninos: number = 0;
  bebes: number = 0;

  constructor() {

  }

  ngOnInit(): void {

    window.onscroll = function () {
      scrollFunction()
    };

    function scrollFunction() {
      let navSearch = document.getElementById("nav-search");

      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        navSearch!.style.display = "flex";
      } else
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          navSearch!.style.display = "flex";
        } else {
          navSearch!.style.display = "none";
        }
    }
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
