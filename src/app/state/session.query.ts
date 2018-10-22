import { Query, toBoolean } from '@datorama/akita';

import { SessionStore, SessionState } from './session.store';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SessionQuery extends Query<SessionState> {
    user$ = this.select(session => session.user);

    constructor(protected store: SessionStore) {
        super(store);
    }

    isLoggedIn() {
        const isLoggedIn = toBoolean(this.getCurrentUser());

        return isLoggedIn;
    }

    getCurrentUser() {
        return this.getSnapshot().user;
    }
}
