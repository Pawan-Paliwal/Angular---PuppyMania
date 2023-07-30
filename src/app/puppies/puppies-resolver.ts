// import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
// import { Post } from '../models';
// import { filter, Observable, take } from 'rxjs';
// import { inject } from '@angular/core';
// import { PostsFacade } from '../../store/posts';

import {  inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";

import { datastorage } from "../shared/data-storage-https-service";

// export class PostResolver implements Resolve<Post> {
//   constructor(private readonly postsFacade: PostsFacade) {}

//   resolve(
//     route: ActivatedRouteSnapshot, 
//     state: RouterStateSnapshot
// ): Observable<Post> {
//     const id = route.paramMap.get('id');

//     return this.postsFacade.getOne(id)
//       .pipe(
//         filter<Post>((post: Post) => !!post),
//         take(1));
//   }
// }
export const addEditClietResolver: ResolveFn<any> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return inject(datastorage).fetchPuppies();
    };