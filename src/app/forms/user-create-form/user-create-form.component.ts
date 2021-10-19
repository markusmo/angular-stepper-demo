import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.css']
})
export class UserCreateFormComponent implements OnInit {

  formGroup: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

}
