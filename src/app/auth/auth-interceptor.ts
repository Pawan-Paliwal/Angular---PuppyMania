// import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
// import { Authservice } from "./Authservice";
// import { Observable, catchError, exhaustMap, take, throwError } from "rxjs";

import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";


// export class interceptor implements HttpInterceptor{
// constructor(private authservice:Authservice){}
// intercept(req: HttpRequest<any>, next: HttpHandler) {
//     this.authservice.user.pipe(take(1),exhaustMap(user=>{
//         const modify=req.clone({params:new HttpParams().set('auth',user.token)})
//         return next.handle(modify);
//     }))
  
// }

// }

// export class AuthInterceptorService implements HttpInterceptor {
//   constructor(private authService: Authservice) {} 
//  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
//     const token = this.authService.getAuthToken();

//    if (token) {
//      // If we have a token, we set it to the header
//      request = request.clone({
//         setHeaders: {Authorization: `Authorization token ${token}`}
//      });
//   }

//   return next.handle(request).pipe(
//   	catchError((err) => {
//    	 if (err instanceof HttpErrorResponse) {
//        	 if (err.status === 401) {
//        	 // redirect user to the logout page
//      	}
//  	 }
//       return throwError(()=>err)
// 	})
//    )
//   }
// }
@Injectable()
class UserToken {
}

@Injectable()
class PermissionsService {
  canActivate(currentUser: UserToken, userId: string): boolean {
    return true;
  }
  canMatch(currentUser: UserToken): boolean {
    return true;
  }
}

const canActivateTeam: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return inject(PermissionsService).canActivate(inject(UserToken), route.params["id"]);
    };