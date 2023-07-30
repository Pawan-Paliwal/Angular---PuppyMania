import { NgModule } from "@angular/core";
import { puppyservice } from "./puppies/puppy-service";
import { puppyworldservice } from "./puppy-world/puppyworld-service";

@NgModule({
    providers: [puppyworldservice,puppyservice],
})
export class commonModule{

}