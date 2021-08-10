import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faLinkedinIn,faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  iconFacebook = faFacebookF;
  iconInstagram = faInstagram;
  iconLinkedin = faLinkedinIn;
  iconYoutube = faYoutube;

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string){
    window.open(url, "_blank");
}

}
