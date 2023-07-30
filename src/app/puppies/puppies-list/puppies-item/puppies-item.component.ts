import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { puppy } from 'src/app/shared/puppy';


@Component({
  selector: 'app-puppies-item',
  templateUrl: './puppies-item.component.html',
  styleUrls: ['./puppies-item.component.css']
})
export class PuppiesItemComponent {
  @Input() puppies:puppy;
  @Input() index:number;
   constructor(private roter:Router){}

 
  // onload(index:number){
  //   this.roter.navigate(['detail/:this.index']);
  // }
  // selectRecipe(){
  //   this.puppyservice.selectedPuppy.emit(this.puppies);
  // }
}
