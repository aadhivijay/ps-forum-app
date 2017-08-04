import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form; 

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      signinemailid: new FormControl("", Validators.required),
      signinpassword: new FormControl("", [Validators.required, Validators.minLength(4)])
    });
    
  }

}
