
import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

import { KinveyService } from '../kinvey.service';
import { User } from './user.model';
import { LoginData } from './login-data.model';

export interface SessionState { 
    user: User | null;
} 

export function createInitialState(): SessionState {
    return {
        user: null,
    };
}

export function createSession(user: User) {
    return { ...user };
}

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {

    constructor(private kinveyService: KinveyService) {
        super(createInitialState());
    }

    login(data: LoginData) {
        return new Promise((resolve, reject) => {
            this.kinveyService.logIn(data)
                .then(user => {
                    this.update({ user });
                    return resolve(user);
                })
                .catch(reject);
        });
    }

    logout() {
        this.update(createInitialState());
    }
}