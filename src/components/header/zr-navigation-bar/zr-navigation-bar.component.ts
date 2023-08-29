import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zr-navigation-bar',
  templateUrl: './zr-navigation-bar.component.html',
  styleUrls: ['./zr-navigation-bar.component.scss']
})
export class ZrNavigationBarComponent {
  @Input() title!: string
}
