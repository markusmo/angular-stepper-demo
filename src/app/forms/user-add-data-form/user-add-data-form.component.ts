import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-add-data-form',
  templateUrl: './user-add-data-form.component.html',
  styleUrls: ['./user-add-data-form.component.css']
})
export class UserAddDataFormComponent implements OnInit {

  formGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl(),
      lastname: new FormControl()
    });
  }

}
