import { Routes,RouterModule } from "@angular/router";
import { TempdisplayComponent } from './tempdisplay/tempdisplay.component';
import { AddtaskComponent } from './tempdisplay/addtask/addtask.component';
import { UpdatetaskComponent } from './tempdisplay/updatetask/updatetask.component';
import { ReactdisplayComponent } from './reactdisplay/reactdisplay.component';
import { AdddataComponent } from './reactdisplay/adddata/adddata.component';
import { UpdatereactComponent } from './reactdisplay/updatereact/updatereact.component';


const arr:Routes=[

  {path:'display',component:TempdisplayComponent},
  {path:'addtask',component:AddtaskComponent},
  {path:"edit/:Id",component:UpdatetaskComponent},
  {path:'reactdata',component:ReactdisplayComponent},
  {path:'addreact',component:AdddataComponent},
  {path:'update/:user_email',component:UpdatereactComponent}
];



export const routing=RouterModule.forRoot(arr);
