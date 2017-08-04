import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  form;

  constructor() {
   }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl("", Validators.required),
      body: new FormControl("", Validators.required)
    });
  }

}
