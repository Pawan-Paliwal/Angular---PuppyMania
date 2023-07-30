import { Component } from '@angular/core';

// import { ActivatedRoute, Params } from '@angular/router';
// import { puppy } from '../shared/puppy';
// import { puppyservice } from '../puppies/puppy-service';

 
@Component({
  selector: 'app-cart-one',
  templateUrl: './cart-one.component.html',
  styleUrls: ['./cart-one.component.css']
})
export class CartOneComponent {
  // puppies:puppy;
  // id:number;
  // constructor(private route:ActivatedRoute,private puppyservice:puppyservice){}

  ngOnInit(): void {
      //  this.route.params.subscribe((params:Params)=>{
      //   this.id= +params['id'];
      //   this.puppies=this.puppyservice.Getid(this.id)
      //  })
  }
 
}
