import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReactdataService } from '../reactdata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-updatereact',
  templateUrl: './updatereact.component.html',
  styleUrls: ['./updatereact.component.css']
})
export class UpdatereactComponent implements OnInit {

  user:FormGroup;
  email:string;
  updated:any;

  constructor(private fb:FormBuilder,private userdata:ReactdataService,private router:Router,private activated:ActivatedRoute) { }

  ngOnInit() {

  this.email=this.activated.snapshot.params['user_email'];
  this.userdata.getUserByEmail(this.email).subscribe(
    (data:User[])=>{
      this.updated=data[0];
      this.user.patchValue({
        user_email:this.updated.user_email,
        user_name:this.updated.user_name,
        user_password:this.updated.user_password,
        user_mobile_no:this.updated.user_mobile_no
      });
    }
  );


    this.fb.group({
      user_email:new FormControl(null,[Validators.required,Validators.email]),
      user_name:new FormControl(null,[Validators.required,Validators.pattern("[a-zA-Z]*")]),
      user_password:new FormControl(null,[Validators.required]),
      user_mobile_no:new FormControl(null,[Validators.required,Validators.pattern("[0-9]*")])

    });



  }

  onUpdate(data){
    this.userdata.changeData(data).subscribe(
      (data:any)=>{
        alert("record updated");
        this.router.navigate(['/reactdata']);
      }
    );

  }

}
