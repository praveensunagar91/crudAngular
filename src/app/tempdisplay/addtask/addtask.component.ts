import { Component, OnInit } from '@angular/core';
import { TaskdataService } from '../taskdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor(private taskdata:TaskdataService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(data){
    this.taskdata.insertData(data).subscribe(
      (data:any)=>{
        alert('record added');
        this.router.navigate(['/display']);
      }
    );
  }
}
