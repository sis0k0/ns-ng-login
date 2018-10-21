import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AlertService } from './alert.service';
import { SessionQuery } from './state/session.query';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private sessionQuery: SessionQuery,
        private alertService: AlertService,
    ) {
    }

    canActivate(_next: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean {
        const isAuth = this.isAuthenticated();
        if (!isAuth) {
            this.alertService.show("You are not logged in!");
        }

        return isAuth;
    }

    private isAuthenticated() {
        return this.sessionQuery.isLoggedIn();
    }
}
