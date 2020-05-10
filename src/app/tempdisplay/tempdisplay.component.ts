import { Component, OnInit } from '@angular/core';
import { TaskdataService } from './taskdata.service';
import { Task } from './task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tempdisplay',
  templateUrl: './tempdisplay.component.html',
  styleUrls: ['./tempdisplay.component.css']
})
export class TempdisplayComponent implements OnInit {
  arr:Task[]=[];
  searchstr:string;
  config: any;
  collection:Task[]=[];

  constructor(private taskdata:TaskdataService, private router:Router) {

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.length
    };
   }

  ngOnInit() {
  this.taskdata.getData().subscribe(
    (data:Task[])=>{
      this.arr=data;
    }
  );

  }

  onRemove(item : Task){

     this.taskdata.removeData(item.Id).subscribe(
       (res:any)=>{
        console.log(res);

           this.arr.splice(this.arr.indexOf(item),1);
            alert('record removed');

       }
     );
  }

  onEdit(item:Task){
    this.router.navigate(['/edit',item.Id]);

  }

  pageChanged(event){
    this.config.currentPage = event;
  }



}
