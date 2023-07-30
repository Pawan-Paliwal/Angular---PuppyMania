// import { Injectable } from "@angular/core";
// import { Router, UrlTree } from "@angular/router";
// import { Observable } from "rxjs";
// import { Authservice } from "./Authservice";

// @Injectable({providedIn:'root'})
// export class authguard {
 
    
//     constructor(private authService:Authservice,private router:Router){}
 
//     canActivate():
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     if (!this.authService.AutoLogin()) {
//       this.toastr.info('Please Log In!');
//       this.router.navigate(['/auth']);
//       return false;
//     }
//     // logged in, so return true
//     this.authService.AutoLogin();
//     return true;
//   }
// }