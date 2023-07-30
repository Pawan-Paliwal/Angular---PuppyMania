import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { puppy } from 'src/app/shared/puppy';
import { puppyservice } from '../puppy-service';




@Component({
  selector: 'app-puppies-detail',
  templateUrl: './puppies-detail.component.html',
  styleUrls: ['./puppies-detail.component.css']
})
export class PuppiesDetailComponent implements OnInit {
   puppies:puppy;
  @Input()  id:number;
   constructor(private puppyService:puppyservice ,private route:ActivatedRoute,private router:Router ,){}

  
 addToCArt(){
this.puppyService.addIngreToPuppyWorld(this.puppies.pups);
 }


ngOnInit() {
    this.route.params
    .subscribe((params:Params)=>{
      this.id=+params['id'];
      //id is used for the current index slection
      this.puppies=this.puppyService.Getid(this.id);
    }) 
}



//navigating
OnEdit(){
  this.router.navigate(['edit'], {relativeTo: this.route});
 }

 
 //delete the item in the puppies section in the component
ondelete(){
  this.puppyService.deleteOne(this.id);
  this.router.navigate(['puppies']);
  }
  // cartdetail
  // Addon(){
  //   if(!localStorage.getItem('user')){
  //     this.puppyService.localaddtocartA(this.puppies)
  //   }
  //   console.log(this.puppies)
  //   }

  // Addon(catagory){
  //   console.log(catagory);
  //   let catritem=localStorage.getItem('local');
  //   if(catritem== null){
  //     let storedata:any=[];
  //     storedata.push(catagory)
  //     localStorage.setItem('local',JSON.stringify(storedata))
  //   }
  //   // else
  //   // {
  //   //   var id= catagory.name;
  //   //    let index:number=-1;
  //   //     this.itemcart=JSON.parse( localStorage.getItem('local'));
  //   //     for (let i=0;i<this.itemcart.length;i++){
  //   //       if (parseInt(id)===this.itemcart[i].name){

  //   //       }
  //   //     }
  //   // }
  //   // localStorage.setItem('local',JSON.stringify(catagory));

  // }
}
 