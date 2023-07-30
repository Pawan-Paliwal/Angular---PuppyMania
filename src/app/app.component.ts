import { Component, OnInit } from '@angular/core';
import { Authservice } from './auth/Authservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'puppyMania';
constructor(private authservice:Authservice){}

ngOnInit(): void {
    this.authservice.AutoLogin();
}
  // selectionPuppy = 'puppies';
  // chooseOne='dogs';

  //this is for the header component ------->
//   selectOne(feature:string){
// this.selectionPuppy=feature;
//   }


//this is for the prehaeder component ------->
// prehead(hey:string){
//     this.chooseOne=hey;
//   }
}
