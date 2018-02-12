import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Directives';

  serverCreated: Boolean = false;
  serverName: String = '';
  serverStatus: String = 'Offline';


  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Offline' : 'Online';
  }
  onCreateServer() {
    this.serverCreated = true;
  }

  getColor() {
    return this.serverStatus === 'Online' ? 'Green' : 'Red';
  }


}
