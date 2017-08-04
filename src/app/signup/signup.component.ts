import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form;  

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      phonenumber: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      emailid: new FormControl("", Validators.required),
      password: new FormControl("", [Validators.required, Validators.minLength(4)])      
    });
  }

}
