import { Injectable } from "@angular/core";
import { alert } from "tns-core-modules/ui/dialogs";

@Injectable({
    providedIn: "root"
})
export class AlertService {
    constructor() { }

    show(
        message: string,
        title = "Error",
        okButtonText = "ok",
    ) {

        const options = {
            message,
            title,
            okButtonText,
        };

        return alert(options);
    }
}
