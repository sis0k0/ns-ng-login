import { Query, toBoolean } from '@datorama/akita';

import { SessionStore, SessionState } from './session.store';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SessionQuery extends Query<SessionState> {
    constructor(protected store: SessionStore) {
        super(store);
    }

    isLoggedIn() {
        return toBoolean(this.getCurrentUser());
    }

    getCurrentUser() {
        return this.getSnapshot().user;
    }
}
