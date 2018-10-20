import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthGuard } from "./auth.guard";
import { KinveyInitResolver } from "./kinvey.service";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
    },
    {
        path: "home", component: HomeComponent,
        resolve: {
            _: KinveyInitResolver,
        }
    },
    { path: "about", component: AboutComponent },
    { path: "login", component: LoginComponent },
    {
        path: "admin",
        component: AdminComponent,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
