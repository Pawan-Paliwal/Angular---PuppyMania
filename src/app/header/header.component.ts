import { Component,  OnDestroy,  OnInit } from '@angular/core';
import { datastorage } from '../shared/data-storage-https-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Authservice } from '../auth/Authservice';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit,OnDestroy {

 authentication=false;
 private authsub:Subscription;


  constructor(private dataStorage:datastorage,
    private route:Router,
    private routes:ActivatedRoute ,private authservice:Authservice ){}


  ngOnInit() {
      this.authsub= this.authservice.user
       .subscribe(user=>{
       this.authentication=!!user;
             //  console.log(!user)
      //  console.log(!!user)
       })
  }

storeUps(){
this.dataStorage.storePuppies();
}

//fetching puppies
fetchPuppies(){
  this.dataStorage.fetchPuppies();
}


ngOnDestroy(): void {
  this.authsub.unsubscribe();
}
logoutMethod(){
  this.authservice.logOut();
}

}
