import { Component } from '@angular/core';
import {SidebarComponent} from './sidebar.component';
import {ListComponent} from './list.component';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[SidebarComponent,ListComponent]
})
export class AppComponent {
  title = 'app works!';
}
