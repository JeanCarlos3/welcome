import { Component, OnInit } from '@angular/core';
import { faFilter, faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-mobile-filter',
  templateUrl: './mobile-filter.component.html',
  styleUrls: ['./mobile-filter.component.css']
})
export class MobileFilterComponent implements OnInit {

  r:number = 100;
  faMap = faMap;
  faFilter = faFilter;
  faSortAmountDown = faSortAmountDown;
  constructor() { }

  ngOnInit(): void {

    window.onscroll = function () {
      scrollFunction()
    };
    function scrollFunction() {
      let filterMobile = document.getElementById("filter-mobile");
      if ((document.documentElement.scrollHeight - 1000) < document.documentElement.scrollTop) {
        filterMobile!.style.visibility = "hidden";
      } else {
        filterMobile!.style.visibility = "visible";
      }
    }

  }

  zoomCambio(valor: string) {   
    this.r = (Number(valor))
  }

}
