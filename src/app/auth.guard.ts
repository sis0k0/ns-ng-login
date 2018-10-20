import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private userService: UserService) {
    }

    canActivate( _next: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean {
        const isAuth = this.isAuthenticated();
        if (!isAuth) {
            console.log("You are not logged in!");
        }
        return isAuth;
    }

    private isAuthenticated() {
        const user =  this.userService.getCurrentUser();
        return !!user;
    }
}
