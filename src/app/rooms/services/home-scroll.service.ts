
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeScrollService {

  constructor() { }


  metodo(): void {
    window.onscroll = function () {
      scrollNavSearch();
      scrollBarMobile();

    };

    function scrollNavSearch() {

      let navSearch = document.getElementById("nav-search");

      if (navSearch) {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
          navSearch!.style.display = "flex";
        }
        else
          if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            navSearch!.style.position = "fixed";
            navSearch!.style.display = "flex";
          } else {
            navSearch!.style.position = "relative";
            navSearch!.style.display = "none";
          }
      }
    }

    function scrollBarMobile() {
      
      let mobile = document.getElementById("mobile");

      if (mobile) {

        if ((document.documentElement.scrollHeight - 800) < document.documentElement.scrollTop) {
          mobile!.style.visibility = "hidden";
        } else {
          mobile!.style.visibility = "visible";
        }
      }
    }   
  }

  reserva(): void {
    window.onscroll= function (){
      scrollReservaBox()
     
    };
    function scrollReservaBox(): void {

      let reservaBox = document.getElementById("reserva-box");
      console.log("log", document.documentElement.scrollTop);

      if (reservaBox) {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
          reservaBox!.style.position = "fixed";
          reservaBox!.style.top = "40%";
        } else {
          reservaBox!.style.position = "relative";
        }
      }
    }
  }
}
