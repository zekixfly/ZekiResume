import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-zr-resume-intro',
  templateUrl: './zr-resume-intro.component.html',
  styleUrls: ['./zr-resume-intro.component.scss'],
})
export class ZrResumeIntroComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faGithub);
  }
}
