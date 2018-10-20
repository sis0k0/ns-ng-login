import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserService } from './user.service';
import { AlertService } from './alert.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private userService: UserService,
        private alertService: AlertService,
    ) {
    }

    canActivate( _next: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean {
        const isAuth = this.isAuthenticated();
        if (!isAuth) {
            this.alertService.show("You are not logged in!");
        }

        return isAuth;
    }

    private isAuthenticated() {
        const user =  this.userService.getCurrentUser();
        return !!user;
    }
}
