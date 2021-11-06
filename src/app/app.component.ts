import { Component } from '@angular/core';
import { animation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [animation]
})
export class AppComponent {
  title = 'change4life';
}
