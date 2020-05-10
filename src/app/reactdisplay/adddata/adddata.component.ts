import { Component, OnInit } from '@angular/core';
import { ReactdataService } from '../reactdata.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {

  user:FormGroup;

  constructor(private userdata:ReactdataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit() {

    this.user=this.fb.group({

      user_email:new FormControl(null,[Validators.required,Validators.email]),
      user_name:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      user_password:new FormControl(null,[Validators.required]),
      user_mobile_no:new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')])
    });
  }

onSubmit(data){
  this.userdata.addData(data).subscribe(
    (data:any)=>{
      alert("record added");
      this.router.navigate(['/reactdata']);
    }
  );
}


}
