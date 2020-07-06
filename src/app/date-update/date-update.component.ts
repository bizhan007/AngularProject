import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-date-update',
  templateUrl: './date-update.component.html',
  styleUrls: ['./date-update.component.scss']
})
export class DateUpdateComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private service: UserService ) {
    this.userForm=this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      city:['',Validators.required],
      country:['',Validators.required]
    })
  }



  ngOnInit(): void {
  }

}
