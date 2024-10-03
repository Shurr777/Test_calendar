export interface AuthState {
    isAuth: boolean;
}

export enum AuthActionsEnum {
    SET_AUTH_STATE = 'SET_AUTH_STATE',
}

export interface SetAuthAction {
    type: AuthActionsEnum.SET_AUTH_STATE;
    payload: boolean;
}

export type AuthAction = SetAuthAction;