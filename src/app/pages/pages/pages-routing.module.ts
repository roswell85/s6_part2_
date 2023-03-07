import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagesComponent} from "./pages.component";

const routes: Routes = [
  {path:'home',component:PagesComponent},
  {path:'error',loadChildren:()=>import('./error/error.module').then(m=>m.ErrorModule)},
  {path:'',redirectTo:'home',pathMatch:'full'},

  {path:'**',redirectTo:'error'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
