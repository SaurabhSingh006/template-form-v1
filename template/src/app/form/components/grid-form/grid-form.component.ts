import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-form',
  templateUrl: './grid-form.component.html',
  styleUrls: ['./grid-form.component.scss']
})
export class GridFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gridForm = new FormGroup({
    fullname: new FormControl('', [
      Validators.required,
      Validators.maxLength(32)
    ]),
    nationality: new FormControl('', [
      Validators.required
    ]),
    location: new FormControl('',[
      Validators.required
    ]),
    DOB: new FormControl('', [
      Validators.required,
    ]),
    gender: new FormControl('', [
      Validators.required
    ]),
    position: new FormControl('', [
      Validators.required
    ]),
    passport: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    address: new FormControl('', [
      Validators.required
    ])
  });

}
