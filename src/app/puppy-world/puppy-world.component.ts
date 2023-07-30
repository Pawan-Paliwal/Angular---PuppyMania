import { Component, OnInit } from '@angular/core';
import { puppyworld } from '../shared/world';
import { puppyworldservice } from './puppyworld-service';


@Component({
  selector: 'app-puppy-world',
  templateUrl: './puppy-world.component.html',
  styleUrls: ['./puppy-world.component.css']
})
export class PuppyWorldComponent implements OnInit {
  pups:puppyworld[];

    constructor(private PWservice:puppyworldservice){}
   ngOnInit(){
       this.PWservice.pupsAdded
       .subscribe((puppz:puppyworld[])=>{
        this.pups=puppz;
       })
       this.pups=this.PWservice.getpups();
   }

   //single item iteration 
   OnItemAdd(index :number){
    this.PWservice.addedonNew.next(index);
   }
   
}
