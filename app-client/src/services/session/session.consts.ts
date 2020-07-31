export interface ISessionUser {
  id: string;
  username: string;
}

export interface ICredentials {
  username: string;
  password: string;
}

export interface ISessionState {
  isAuthenticated: boolean;
  user: ISessionUser | {};
  isLoading: boolean;
  errors: any;
}
export enum SessionEvents {
  SET_CURRENT_USER = "session/SET_CURRENT_USER",
  REQUEST_SIGNIN = "session/REQUEST_SIGNIN",
  SET_ERRORS = "session/SET_ERRORS",
}
