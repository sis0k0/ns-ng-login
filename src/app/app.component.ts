import { Component } from "@angular/core";
import { KinveyService } from "./kinvey.service";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent {
    constructor(private kinveyService: KinveyService) {
        this.kinveyService.initialize();
    }
}
