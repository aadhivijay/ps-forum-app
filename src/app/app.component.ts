import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  visible = true;
  n = 1;

  result = 2;

  constructor() {
  	setTimeout(() => {
  		this.result = 50;
  		}, 2000);
  }
  a = [
  	{'name' : 'html', 'type' : 'front'},
  	{'name' : 'css', 'type' : 'front'},
  	{'name' : 'phyton', 'type' : 'back'},
  	{'name' : 'ruby', 'type' : 'back'},
  ];

  incrementN() {
  	this.n += 1;
  }
}
