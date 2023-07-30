
import { puppyworld } from '../shared/world';
import { Subject } from 'rxjs';

export class puppyworldservice {
  pupsAdded = new Subject<puppyworld[]>();
  addedonNew=new Subject<number>();
  private pups: puppyworld[] = [];

  //used it in the ts file where we can esily displayed the our puppyworld 
  getpups() {
    return this.pups.slice();
  }

  //edit for the single  item in the puppworld 
  getId(index:number){
    return this.pups[index];
  }

   //using this in the puppy for the render puppy over there
   AddTopuppy(pups: puppyworld[]) {
    this.pups.push(...pups);
    this.pupsAdded.next(this.pups.slice());
  }

  //to add the new row in the edited section -------
  addonPups(pups: puppyworld) {
    this.pups.push(pups);
    this.pupsAdded.next(this.pups.slice());
  }



  // for the update the one item in the puppyworld
  updateOne(index: number ,newIngre:puppyworld){
  this.pups[index]= newIngre;
  this.pupsAdded.next(this.pups.slice());
  }

  //deletedOne item in the edited mode
  deletedOne(index:number){
    this.pups.splice(index,1);
    this.pupsAdded.next(this.pups.slice());
    }
    
}
