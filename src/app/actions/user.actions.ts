import { Action } from '@ngrx/store';

export enum UserActionTypes {
    GetCurrentUser = '[User] Get Current User',
    Authenticated = '[User] Authenticated',
    Login = '[User] Log In',
}

export class Authenticated implements Action {
    readonly type = UserActionTypes.Authenticated;
    constructor(public payload?: any) {}
}

export class GetCurrentUser implements Action {
    readonly type = UserActionTypes.GetCurrentUser;
    constructor(public payload?: any) {}
}

export class LogIn implements Action {
    readonly type = UserActionTypes.Login;
    constructor(public payload?: any) {}
}

export type All =
    Authenticated |
    GetCurrentUser |
    LogIn;
