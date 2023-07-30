import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreheaderComponent } from './preheader/preheader.component';
import { StartoneComponent } from './startone/startone.component';
import { CartOneComponent } from './cart-one/cart-one.component';
import { NotesComponent } from './notes/notes.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // {path:'puppies',loadChildren:()=>import('./puppies/puppies-module').then(m=>m.puppiemodule)},
  { path: 'home', component: StartoneComponent },
  { path: 'about', component: PreheaderComponent },
  { path: 'cart', component: CartOneComponent },
  {path:'Note',component:NotesComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class appRoutingModuleS {}
