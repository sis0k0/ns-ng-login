import { Component, OnInit } from '@angular/core';
import { UserService, LoginData } from '../user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    moduleId: module.id,
})
export class LoginComponent implements OnInit {
    public username: string;
    public password: string;

    constructor(private userService: UserService, private router: Router) {
    }

    ngOnInit() {
        this.username = "foo2@foo.com";
        this.password = "foo";
    }

    login() {
        const user = new LoginData(this.username, this.password);
        this.userService.login(user)
            .then(() => {
                this.router.navigate(["/admin"]);
            })
            .catch(() => {
                console.log("Logging in failed...");
            });
    }
}
