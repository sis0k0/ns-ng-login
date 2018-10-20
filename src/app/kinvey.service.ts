import { Injectable } from "@angular/core";
import { Kinvey } from "kinvey-nativescript-sdk";

@Injectable({
    providedIn: 'root'
})
export class KinveyService {
    private appKey = "kid_SyY8LYO8M";
    private appSecret = "09282985d7c540f7b076a9c7fd884c77";

    public username = "admin";
    public password = "admin";

    public initialize() {
        Kinvey.init({
            appKey: this.appKey,
            appSecret: this.appSecret,
        });
    }
}
