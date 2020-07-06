import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";


@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.scss']
})
export class TableUserComponent implements OnInit {

  userForm: FormGroup;
  dataSource: any[] = []
  displayedColumns: string[] = ['id','name','city','country','button'];

  constructor(private formBuilder:FormBuilder, private service: UserService ) {
    this.userForm=this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      city:['',Validators.required],
      country:['',Validators.required]
    })
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getData()
  }


  getData(){
    this.service.getData().subscribe(res=>{
      this.dataSource = res
    })}

  deleteUser(id){
    this.service.deleteData(id).subscribe(res=>{
      console.log("complete")
      this.getData()
    });
  }

  updateUser() {

  }

}
