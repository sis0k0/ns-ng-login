import { Injectable } from "@angular/core";
import { Kinvey } from "kinvey-nativescript-sdk";

export class LoginData {
    constructor(public username: string, public password: string) {
    }
}

export class User {
    constructor(public username) {
    }
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    login(user: LoginData) {
        return new Promise((resolve, reject) => {
            Kinvey.User.logout()
                .then(() => {
                    const { username, password } = user;
                    Kinvey.User.login(username, password)
                        .then(resolve)
                        .catch(reject)
                })
                .catch(reject)
        });
    }

    getCurrentUser(): User {
        return Kinvey.User.getActiveUser();
    }
}
