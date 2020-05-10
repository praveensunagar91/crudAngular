import { Component, OnInit } from '@angular/core';
import { ReactdataService } from './reactdata.service';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactdisplay',
  templateUrl: './reactdisplay.component.html',
  styleUrls: ['./reactdisplay.component.css']
})
export class ReactdisplayComponent implements OnInit {
  config: any;
  collection : User[]=[];
  arr:User[]=[];
  searchstr:string;

  constructor( private userdata:ReactdataService, private router:Router) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.length
    };
   }

  ngOnInit() {
    this.userdata.getData().subscribe(
      (data:User[])=>{
        this.arr=data;
      }
    );
  }

  onRemove(item:User){
    this.userdata.deleteData(item.user_email).subscribe(
      (data:any)=>{
        console.log(data);
        this.arr.splice(this.arr.indexOf(item),1);
        alert('record removed');
      }
    );
  }

  onEdit(item:User){
    this.router.navigate(["/update",item.user_email]);
  }

  pageChanged(event){
    this.config.currentPage = event;
  }



}
