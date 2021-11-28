import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formInput = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    panNo: new FormControl('', [
      Validators.pattern(/[A-Z]{5}\d{4}[A-Z]{1}/i)
    ]),
    DOB: new FormControl('', [
      Validators.required
    ]),
    quantity: new FormControl('', [
      Validators.required,
      Validators.min(1000),
      Validators.max(10000)
    ]),
    gender: new FormControl('', [
      Validators.required
    ])
  });

}
