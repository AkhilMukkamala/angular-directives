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


  
  onCreateServer() {
    this.serverCreated = true;
  }



}
