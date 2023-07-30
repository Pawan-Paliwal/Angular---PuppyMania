import { Injectable } from '@angular/core';
import { puppyservice } from '../puppies/puppy-service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { exhaustMap, map, take, tap } from 'rxjs';
// import { Authservice } from '../auth/Authservice';
import { puppy } from './puppy';
import { Authservice } from '../auth/Authservice';

@Injectable({ providedIn: 'root' })
export class datastorage {
  constructor(
    private puppyservice: puppyservice,
    private http: HttpClient,
    private authservice:Authservice
  ) {}

  storePuppies() {
    const puppies = this.puppyservice.getpuppies();
    return this.http
      .put(
        'https://puppydemo-7e343-default-rtdb.firebaseio.com/puppies.json',
        puppies
      )
      .subscribe((Response) => {
        console.log(Response);
      });
  }

  //  fetchPuppies(){
  //   this.http.get<puppy[]>('https://puppydemo-7e343-default-rtdb.firebaseio.com/puppies.json') .pipe(
  //     map(puppies => {
  //       return puppies.map(puppies => {
  //         return {
  //           ...puppies,pups:puppies.pups ? puppies.pups:[]
  //         };
  //       });
  //     })
      
  //   ).subscribe(puppies => {
  //     this.puppyservice.fetchOne(puppies);
  //   })
  //  }

  //  fetchPuppie(){
  //   return this.authservice.user.pipe(take(1),exhaustMap(user=>{
  //     return this.http.get<puppy[]>('https://puppymania-4b3a5-default-rtdb.firebaseio.com/puppies.json',
  //    )
  //    }),map(puppies=>{
  //   return puppies.map(puppies=>{
  //     return { ...puppies,pups:puppies.pups ? puppies.pups:[]};
  //   });
  //  }),
  //  tap(puppies=>{
  //   this.puppyservice.fetchOne(puppies);
  //  }))
  // }
  // 
  // fetchPuppies() {
  //   return this.authservice.user.pipe(
  //     take(1),
  //     exhaustMap((user) => {
  //       return this.http.get<puppy[]>(
  //         'https://puppymania-4b3a5-default-rtdb.firebaseio.com/puppies.json' ,
  //         {
  //           params: new HttpParams().set('auth', user.token),
  //         }
  //       );
  //     }),
  //     map((puppies) => {
  //       return puppies.map((puppies) => {
  //         return {
  //           ...puppies,
  //           ingredients: puppies.pups ? puppies.pups : [],
  //         };
  //       });
  //     }),
  //     tap((puppies) => {
  //       this.puppyservice.fetchOne(puppies);
  //     })
  //   );
  // }




  // fetchPuppies() {
  //   return this.http
  //     .get<puppy[]>(
  //       'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json'
  //     )
  //     .pipe(
  //       map(puppies => {
  //         return puppies.map(puppies => {
  //           return {
  //             ...puppies,
  //             pups: puppies.pups ? puppies.pups : []
  //           };
  //         });
  //       }),
  //       tap(recipes => {
  //         this.puppyservice.fetchOne(recipes);
  //       })
  //     );
  // }

  fetchPuppies(){
    this.http.get<puppy[]>('https://puppydemo-7e343-default-rtdb.firebaseio.com/puppies.json').subscribe(puppies=>{
      this.puppyservice.fetchOne(puppies)
    })
  }
}
