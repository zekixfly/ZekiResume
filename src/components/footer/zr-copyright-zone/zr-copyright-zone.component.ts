import { Component } from '@angular/core';

@Component({
  selector: 'app-zr-copyright-zone',
  templateUrl: './zr-copyright-zone.component.html',
  styleUrls: ['./zr-copyright-zone.component.scss'],
})
export class ZrCopyrightZoneComponent {
  displayTopBtn: boolean = false;

  ngOnInit(): void {
    window.onscroll = () => {
      this.displayTopBtn =
        document.documentElement.scrollTop > window.innerHeight ? true : false;
    };
  }
}
