import { Component, OnInit } from '@angular/core';
import { puppyservice } from './puppy-service';

@Component({
  selector: 'app-puppies',
  templateUrl: './puppies.component.html',
  styleUrls: ['./puppies.component.css']
})
export class PuppiesComponent implements OnInit{

  constructor(private puppyservice:puppyservice){}

  ngOnInit(){
      
  }
}
