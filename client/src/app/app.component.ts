import { Component } from '@angular/core';
import {SidebarComponent} from './sidebar.component';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[SidebarComponent]
})
export class AppComponent {
  title = 'app works!';
}
