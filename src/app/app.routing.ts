import { Routes,RouterModule } from "@angular/router";
import { TempdisplayComponent } from './tempdisplay/tempdisplay.component';
import { AddtaskComponent } from './tempdisplay/addtask/addtask.component';
import { UpdatetaskComponent } from './tempdisplay/updatetask/updatetask.component';


const arr:Routes=[

  {path:'display',component:TempdisplayComponent},
  {path:'addtask',component:AddtaskComponent},
  {path:"edit/:Id",component:UpdatetaskComponent}
];



export const routing=RouterModule.forRoot(arr);
