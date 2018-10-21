import { Injectable } from "@angular/core";

import { SessionStore } from "./state/session.store";
import { SessionQuery } from "./state/session.query";
import { KinveyService } from "./kinvey.service";
import { AlertService } from "./alert.service";

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
    constructor(
        private sessionStore: SessionStore,
        private sessionQuery: SessionQuery,
        private kinveyService: KinveyService,
        private alertService: AlertService,
    ) {
    }

    login(data: LoginData) {
        if (this.sessionQuery.isLoggedIn()) {
            return new Promise((_, reject) => {
                this.alertService.show('Already logged in!')
                    .then(reject)
                    .catch(reject);
            });
        }

        return new Promise((resolve, reject) => {
            const user = new User(data.username);
            this.sessionStore.login(user);
            return resolve(user);
            // return this.kinveyService.logIn(data)
            //     .then(user => {
            //         console.log(user);
            //         this.sessionStore.login(user);
            //         return resolve(user);
            //     })
            //     .catch(reject);
        });
    }
}
