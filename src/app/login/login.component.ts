import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionStore } from '../state/session.store';
import { LoginData } from '../state/login-data.model';

@Component({
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    moduleId: module.id,
})
export class LoginComponent implements OnInit {
    public username: string;
    public password: string;

    constructor(private sessionStore: SessionStore, private router: Router) {
    }

    ngOnInit() {
        this.username = "js@nativescript.com";
        this.password = "nscore";
    }

    login() {
        const user = new LoginData(this.username, this.password);
        this.sessionStore.login(user)
            .then(() => {
                this.router.navigate(["/admin"]);
            })
            .catch((e) => {
                console.log(`Logging in failed. Original error:\n${e}`);
            });
    }
}
