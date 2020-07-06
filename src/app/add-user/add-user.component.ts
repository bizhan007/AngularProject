  import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private service: UserService ) {
    this.userForm=this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      city:['',Validators.required],
      country:['',Validators.required]
    })
  }

  create() {
    this.service.create(this.userForm.getRawValue()).subscribe(res => {
      alert(res.name);
    });
  }

  ngOnInit(): void {
  }

}
