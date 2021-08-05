import { Component } from '@angular/core';
import { IconService } from './iconRegistry/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UEFAUnifiedUI';
  constructor(private iconService: IconService) {
    this.iconService.registerIcons();
  }

}
