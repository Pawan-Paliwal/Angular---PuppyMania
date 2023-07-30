import { NgModule } from "@angular/core";
import { PuppiesDetailComponent } from "./puppies-detail/puppies-detail.component";
import { PuppiesEditComponent } from "./puppies-edit/puppies-edit.component";
import { PuppiesItemComponent } from "./puppies-list/puppies-item/puppies-item.component";
import { PuppiesListComponent } from "./puppies-list/puppies-list.component";
import { PuppiesStartComponent } from "./puppies-start/puppies-start.component";
import { PuppiesComponent } from "./puppies.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { puppiesRouting } from "./pupies-routing";
import { sharedModule } from "../shared/shared=module";


@NgModule({
    declarations:[
        PuppiesComponent,
        PuppiesDetailComponent,
        PuppiesListComponent,
        PuppiesItemComponent,
        PuppiesStartComponent,
        PuppiesEditComponent
    ],
    imports:[
        RouterModule,sharedModule,ReactiveFormsModule ,puppiesRouting
    ],
    

})
export class puppiemodule{}