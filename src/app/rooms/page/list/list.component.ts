import { Component, OnInit } from '@angular/core';
import { faStar, faFilter, faWifi } from '@fortawesome/free-solid-svg-icons';
import { faCaretSquareLeft,  faCaretSquareRight } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css','./list.component.scss']
})
export class ListComponent implements OnInit {

  faWifi = faWifi;
  faStar = faStar;
  faFilter = faFilter;
  faCaretSquareLeft=faCaretSquareLeft;
  faCaretSquareRight = faCaretSquareRight;

  constructor() { }

  ngOnInit(): void {
  }

}
