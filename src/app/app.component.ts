import { Component } from '@angular/core';

import { ANGULAR_TWITTER } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = ANGULAR_TWITTER;
}
