import { EventEmitter, Injectable } from "@angular/core";
import { puppy } from "../shared/puppy";
import { puppyworld } from "../shared/world";
import { puppyworldservice } from "../puppy-world/puppyworld-service";
import { Subject } from "rxjs";

@Injectable()
export class puppyservice{

 selectedPuppychnges=new Subject<puppy[]>();

   private puppies:puppy[]=
   [
        new puppy('https://i.pinimg.com/736x/e9/41/8a/e9418ae13bda6245183d3982ca677576--taco-teacup-yorkie.jpg',' breeed','A puppy is a juvenile dog. Some puppies can weigh 11.5 kg (2.23.3 lb,), while larger ones can weigh up to 711 kg (1524 lb). All puppies display primary altriciality and healthy puppies grow quickly after birth','3230.00',[new puppyworld('puppies',2),new puppyworld('house',3)]),
        new puppy('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxejcrfQ0h1xLZhP7KqmXd2bKLrQ9J0L4dtTXrY5wK-3MjOQ4ErDdfLMYTYMoe9rvmM_0&usqp=CAU','Golden Retriever','Imagine chicken nuggets if they had four stumpy legs. Golden retriever puppies are just that, plus an utterly boopable nose and kissable ears.','1435.00',[new puppyworld('puppies',2),new puppyworld('house',3)]),
        new puppy('https://cdn.shopify.com/s/files/1/2394/1045/articles/dog-poodle-the-poodle-the-dog-breed_910x.jpg?v=1593443096','Poodle','The Poodle, called the Pudel in German and the Caniche in French, is a breed of water dog. The breed is divided into four varieties based on size, the Standard Poodle, Medium Poodle, Miniature Poodle and Toy Poodle, although the Medium Poodle is not universally recognised.','1455.00',[new puppyworld('puppies',2),new puppyworld('house',3)]),
        new puppy('https://www.iams-india.com/sites/g/files/fnmzdf3471/files/2021-12/Shih-Tzu.png','Shih Tzu','The Shih Tzu is a toy dog breed originating from Tibet and believed to be bred from the Pekingese and the Lhasa Apso. Shih Tzus are known for their short snouts and large round eyes, as well as their long coat, floppy ears, and short and stout posture','1455.00',[new puppyworld('puppies',2),new puppyworld('house',3)]),
        new puppy('https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Maltipoo-image-1.jpg?h=2018fa41&itok=10K7QrPK','Maltipoo','The Maltipoo is a winning combination of a Maltese and poodle. Gentle, playful, and highly intelligent, this hybrid inherits every positive quality from each parent breed, making them a smart, active and affectionate crossbreed. Maltipoos are patient, kind companions for everyone young and old.','1455.00',[new puppyworld('puppies',2),new puppyworld('house',3)])

        
   ];

// private puppies:puppy[]=[];

constructor(private pwService :puppyworldservice){}

  //over ride the fetching the puppies in the http
  fetchOne(puppies:puppy[]){
 this.puppies=puppies;
 this.selectedPuppychnges.next(this.puppies.slice());
  }

getpuppies(){
   return this.puppies.slice()
}


//id can be used for the per iteration
Getid(index: number){
  return this.puppies[index];
}
 
addIngreToPuppyWorld(pups:puppyworld[]){
 this.pwService.AddTopuppy(pups);
}


 // then save  and the make a new puppy in the puppuEdit 
 addOneMore(pups: puppy){
this.puppies.push(pups);
this.selectedPuppychnges.next(this.puppies.slice());
}

//update the current puppy 
updateChnge(index:number,newIngre:puppy){
  this.puppies[index]=newIngre;
  this.selectedPuppychnges.next(this.puppies.slice());
  }
 
  
 //delete the itme in the index 
deleteOne(index: number){
 this.puppies.splice(index,1);
 this.selectedPuppychnges.next(this.puppies.slice());
}

// localaddtocartA(data:puppy){
// let cartData=[];
// let localcart=localStorage.getItem('localCart')
// if(!localcart){
//   localStorage.setItem('localCart',JSON.stringify([data]));
// }
// else{
//   cartData=JSON.parse(localcart);
//   cartData.push(data);
//   localStorage.setItem('localCart',JSON.stringify([cartData]));
// }
// }

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