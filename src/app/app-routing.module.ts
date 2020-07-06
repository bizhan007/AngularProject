import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateUpdateComponent} from "./date-update/date-update.component";


const routes: Routes = [
  {path: 'data-update',component:DateUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
