import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { sharedModule } from "../shared/shared=module";


@NgModule({
    declarations:[
        AuthComponent
    ],
    imports:[
        FormsModule,CommonModule,RouterModule.forChild([
        {path:'authentication',component:AuthComponent}]),sharedModule
    ]
})
export class authModules{

}