import { NgModule, inject } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PuppiesDetailComponent } from "./puppies-detail/puppies-detail.component";
import { PuppiesEditComponent } from "./puppies-edit/puppies-edit.component";
import { PuppiesStartComponent } from "./puppies-start/puppies-start.component";
import { PuppiesComponent } from "./puppies.component";
  const routes:Routes=[
    {path:'puppies',component:PuppiesComponent, children:[
        {path:'', component:PuppiesStartComponent},
        {path:'new', component:PuppiesEditComponent},
        {path:':id', component:PuppiesDetailComponent},
       {path:':id/edit',component:PuppiesEditComponent},
    ]},
    {path:'new', component:PuppiesEditComponent},
    {path:'detail/:id',component:PuppiesDetailComponent},
    {path:'detail/:id/edit',component:PuppiesEditComponent},
  ]

@NgModule({
   imports:[
     RouterModule.forChild(routes)
   ],
   exports:[
    RouterModule
   ] 
})
export class puppiesRouting{}