import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-info',
  templateUrl: './help-info.component.html',
  styleUrls: ['./help-info.component.css']
})
export class HelpInfoComponent implements OnInit {

  markedText: String = "leer más";
  
  constructor() { }

  ngOnInit(): void {
  }

  
  markText(){
    if(this.markedText=="leer más"){
      this.markedText = "leer menos";
      console.log('mas')
    }
    else{
      this.markedText = "leer más";
      console.log('menos')
    }
}

}
