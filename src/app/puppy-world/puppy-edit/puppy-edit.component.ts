import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { puppyworld } from 'src/app/shared/world';
import { puppyworldservice } from '../puppyworld-service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-puppy-edit',
  templateUrl: './puppy-edit.component.html',
  styleUrls: ['./puppy-edit.component.css']
})
export class PuppyEditComponent  implements OnInit,OnDestroy{
  @ViewChild('f') SLform:NgForm;
  subscription:Subscription;
//  @ViewChild('inputref') inputref:ElementRef;
//  @ViewChild('amountref') amountref:ElementRef;


//describe the wht? the edited mode in true or false  
editmode=false;

//we store the index in it 
editedItemIndex:number;

SelectOnlyOne:puppyworld;

 constructor(private PWservice:puppyworldservice){}
ngOnInit(){
  this.subscription=  this.PWservice.addedonNew
    .subscribe((index:number)=>{
     this.editedItemIndex=index;
      this.editmode=true;
      //we just looping the each index of the it---------------
      this.SelectOnlyOne=this.PWservice.getId(index);
      //this is for the used the updation and item in the pyppuworld
       this.SLform.setValue({
       name: this.SelectOnlyOne.name,
       amount:this.SelectOnlyOne.amount
       })
    })
}


//destroy the subscription method ---
 ngOnDestroy(): void {
 this.subscription.unsubscribe();    
 }


//submited form of the html-----
 submit(form:NgForm){
  const value =form.value
  const newIngre = new puppyworld(value.name,value.amount);
  // if the wee are in the updated mode then wht happens 
  if(this.editmode){
    this.PWservice.updateOne(this.editedItemIndex,newIngre)
  }
  else {
    this.PWservice.addonPups(newIngre);
  }
  this.editmode=false;
  form.reset();
}

//for the claer one item in the input box 
onClear(){
  this.SLform.reset();
  this.editmode=false;
}

//delete the element
Ondelete(){
  this.PWservice.deletedOne(this.editedItemIndex);
  this.onClear();
}
}