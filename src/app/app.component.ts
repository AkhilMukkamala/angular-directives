import { Component } from '@angular/core';
import { AppModel } from './app.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Directives';

  serverCreated: Boolean = false;
  serverName = '';
  serverStatus: String = 'Offline';
  servers = ['TestServer1', 'TestServer2'];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Offline' : 'Online';
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  getColor() {
    return this.serverStatus === 'Online' ? 'Green' : 'Red';
  }

// Models

  apps: AppModel[] = [
    new AppModel('First App', 'This App is Life', 'https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/html5-css3-admin-templates.jpg'),
    new AppModel('Second App', 'This App is !Life', 'https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/html5-css3-admin-templates.jpg')
  ];



}
