import { Component,  OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthresponseData, Authservice } from './Authservice';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent{
   isLogin=true;
   error:string | null;
   isloading=false;

 constructor(private authservice:Authservice,private router:Router){}
 
Onswitch(){
   this.isLogin=!this.isLogin
}

onsubmit(form:NgForm){
 if(!form.valid){
  return;
 }
    const email= form.value.email;
    const password=form.value.password;
    this.isloading=true

     let myobs:Observable<AuthresponseData>;
    if(this.isLogin){
      //...login
      myobs= this.authservice.loginMethod(email,password);
    }
    else{
      //signup
      myobs=this.authservice.SignUp(email,password)
    }
  
    myobs.subscribe({
next:(resData)=>{
  console.log(resData),
  this.isloading=false,
  this.router.navigate(['./home']);
},
error:(errorMeassge)=>{
  console.log(errorMeassge),
   this.error=errorMeassge,
   this.isloading=false;
}

})

    form.reset()
   }

   onhandlError(){
    this.error=null;
   } 

}
