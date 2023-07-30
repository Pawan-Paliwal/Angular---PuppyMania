import { Component, OnDestroy, OnInit } from '@angular/core';
import { puppy } from 'src/app/shared/puppy';
import { puppyservice } from '../puppy-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-puppies-list',
  templateUrl: './puppies-list.component.html',
  styleUrls: ['./puppies-list.component.css']
})
export class PuppiesListComponent implements OnInit,OnDestroy{
puppies:puppy[];
subscription:Subscription;

constructor(private pupppyservice:puppyservice,
  private router:Router,private route:ActivatedRoute){}

 
ngOnInit(){
 this.subscription= this.pupppyservice.selectedPuppychnges
   .subscribe((puppies:puppy[])=>{
    this.puppies=puppies;
   }
   );
  this.puppies= this.pupppyservice.getpuppies();
}

onNewRecipe(){
this.router.navigate(['new'],{relativeTo:this.route})
}
 
ngOnDestroy(): void {
    this.subscription.unsubscribe();
}



} 
