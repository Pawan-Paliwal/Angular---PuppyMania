import { NgModule } from "@angular/core";
import { PuppyEditComponent } from "./puppy-edit/puppy-edit.component";
import { PuppyWorldComponent } from "./puppy-world.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { sharedModule } from "../shared/shared=module";

@NgModule({
    declarations:[
        PuppyWorldComponent,
        PuppyEditComponent
    ],
    imports:[
sharedModule,FormsModule,RouterModule.forChild([{path:'puppies-world',component:PuppyWorldComponent},])

    ]
})
export class puppyworldModule{

}