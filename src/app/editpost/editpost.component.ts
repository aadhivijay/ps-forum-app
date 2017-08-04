import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {

  form;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl("", Validators.required),
      body: new FormControl("", Validators.required)
    })
  }

}
