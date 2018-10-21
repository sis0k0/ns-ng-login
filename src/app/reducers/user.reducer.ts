import { Action } from '@ngrx/store';

import { User } from '../user.service';
import * as userActions from '../actions/user.actions';

export type Action = userActions.All;

export type State = User; 
export const defaultUser: User = null;

export function reducer(state = defaultUser, action) {
    switch (action.type) {

        case userActions.UserActionTypes.GetCurrentUser:
            return { ...state };

        case userActions.UserActionTypes.Authenticated:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
