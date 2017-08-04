import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-commentpost',
  templateUrl: './commentpost.component.html',
  styleUrls: ['./commentpost.component.css']
})
export class CommentpostComponent implements OnInit { 
  
  form;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      comment: new FormControl("", Validators.required),
    });
  }

}
