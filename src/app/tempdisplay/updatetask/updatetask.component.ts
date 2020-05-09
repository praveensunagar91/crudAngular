import { Component, OnInit } from '@angular/core';
import { TaskdataService } from '../taskdata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from '../task';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent implements OnInit {

  id:string;
   title:string;
  status:string;

  constructor(private teaskdata:TaskdataService,private router:Router,private activated:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activated.snapshot.params['Id'];
    this.teaskdata.getDtatById(this.id).subscribe(
      (data:Task[])=>{
        this.title=data[0].Title;
        this.status=data[0].Status;
      }
    );
  }
onUpdate(data){
  this.teaskdata.onChange(data).subscribe(
    (data:any)=>{
      alert("record updated");
      this.router.navigate(['/display']);
    }
  );
}
}
