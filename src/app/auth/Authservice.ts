import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, tap, throwError } from "rxjs";
import { User } from "./Usermodel";
import { Router } from "@angular/router";

export interface AuthresponseData{
    idToken: string;
    email: string;
    refreshToken: string;
    expireIn: string;
    localId: string;
    registered?:boolean;
}
  
@Injectable({providedIn:'root'})
export class Authservice {
    
 user = new BehaviorSubject<User>(null);
 private tokenexpireDate:any;
 
    constructor( private http:HttpClient ,private router:Router){}

    //signupmethods
    SignUp(email:string,password:string){
    return this.http.post<AuthresponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAk_VBi7jqhhKw-nqqD6Wmh4g3wmesqgMc',
     {
    email:email,
    password:password,
    returnSecureToken:true
     }).pipe(catchError(this.Handleerror),tap(resData=>{
  this.AuthenTication(resData.email, resData.idToken, resData.localId, +resData.expireIn);
     }));
    }

//loginMethod
loginMethod(email:string,password:string){
    return this.http.post<AuthresponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAk_VBi7jqhhKw-nqqD6Wmh4g3wmesqgMc',
    {
   email:email,
   password:password,
   returnSecureToken:true
    }).pipe(catchError(this.Handleerror),tap(resData=>{
 this.AuthenTication(resData.email, resData.idToken, resData.localId, +resData.expireIn);
    }));
}



AutoLogin(){
const USerlogin:{
  email:string, id:string,_token:string ,_tokenExpirationDate:string
}=JSON.parse(localStorage.getItem('userdata') || '{}');
if(!USerlogin){
  return;
}
  const loadedUser=new User(USerlogin.email,USerlogin.id,USerlogin._token,new Date(USerlogin._tokenExpirationDate) );
  if(USerlogin){
    this.user.next(loadedUser);
    const duration=new Date(USerlogin._tokenExpirationDate).getTime()- new Date().getTime();
    this.AutoLogout(duration);
  }
}

// logging OUt 
logOut(){
   this.user.next(null);
   this.router.navigate(['/authentication']);
   localStorage.removeItem('userdata');
   if (this.tokenexpireDate){
   clearTimeout(this.tokenexpireDate);
   }
   this.tokenexpireDate=null;
}

authologout
AutoLogout(expiredate:number){
 this.tokenexpireDate= setTimeout(() => {
    this.logOut();
  }, 300000);
}

   //handleAuthentication
   private AuthenTication( email:string,localId:string,idToken: string,expireIn: number ){
    const exPirationIn= new Date( new Date().getTime() + expireIn * 1000)
    const user = new User(email,localId,idToken,exPirationIn);
     this.user.next(user);
     this.AutoLogout( expireIn * 1000);
     localStorage.setItem('userdata',JSON.stringify(user));
   }

    //handleerror
  private   Handleerror(errorRes:HttpErrorResponse){
        let errorMeassge='this email is already exists';
        if(!errorRes.error|| !errorRes.error.error){
           const newError= new Error(errorMeassge)
           return throwError(()=>newError)
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMeassge = 'This email exists already';
              break;
            case 'EMAIL_NOT_FOUND':
                errorMeassge = 'This email does not exist.';
              break;
            case 'INVALID_PASSWORD':
                errorMeassge = 'This password is not correct.';
              break;
          }
          const newError= new Error(errorMeassge)
           return throwError(()=>newError)
    }
   
}