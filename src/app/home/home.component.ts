import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Threads } from './home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  threads = [
    new Threads("the titile 1", "body of thread 1"),
    new Threads("the titile 2", "body of thread 2"),
    new Threads("the titile 3", "body of thread 3"),
    new Threads("the titile 4", "body of thread 4")
  ];
  t = this.threads[0];
   
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:4200/home').subscribe(data => {
      console.log(data);
    });
  }

}
