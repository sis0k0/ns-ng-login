import { Injectable } from "@angular/core";
import { Kinvey } from "kinvey-nativescript-sdk";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { LoginData } from "./user.service";

@Injectable({
    providedIn: "root"
})
export class KinveyService implements Resolve<void> {
    private appKey = "kid_SyY8LYO8M";
    private appSecret = "09282985d7c540f7b076a9c7fd884c77";
    private initialized = false;
 
    public username = "admin";
    public password = "admin";

    constructor() {
    }

    resolve(
        _route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot,
    ): Promise<void> {
        if (this.initialized) {
            return;
        }

        console.log("#### Initializing Kinvey SDK...");

        Kinvey.init({
            appKey: this.appKey,
            appSecret: this.appSecret,
        });
        this.initialized = true;

        return this.logOut();
    }

    public logIn(data: LoginData): Promise<Kinvey.User> {
        return new Promise((resolve, reject) => {
            console.log("loggin out ...")
            Kinvey.User.logout()
                .then(() => {
                    console.log("logged out, now logging in..")
                    const { username, password } = data;
                    Kinvey.User.login(username, password)
                        .then((user) => {
                            console.log('logged in..')
                            console.log(user)
                            return user;
                        })
                        .catch((e) => {
                            console.dir(e);
                            return reject(e);
                        })
                })
                .catch(reject)
        });
    }

    public logOut(): Promise<void> {
        return Kinvey.User.logout();
    }
}
