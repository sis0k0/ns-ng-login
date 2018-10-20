import { Injectable } from "@angular/core";
import { Kinvey } from "kinvey-nativescript-sdk";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class KinveyInitResolver implements Resolve<void> {
    private appKey = "kid_SyY8LYO8M";
    private appSecret = "09282985d7c540f7b076a9c7fd884c77";

    public username = "admin";
    public password = "admin";

    constructor() {
    }

    resolve(
        _route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot,
    ): Promise<void> {
        console.log("#### Initializing Kinvey SDK");

        Kinvey.init({
            appKey: this.appKey,
            appSecret: this.appSecret,
        });

        return this.logOut();
    }

    private logOut() {
        return Kinvey.User.logout();
    }
}
