export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
}

export interface IUserState {
  user: IUser | {};
  isLoading: boolean;
  errors: any;
}

export enum UserEvents {
  REQUEST_USER = "users/REQUEST_USERS",
  RECEIVE_USER = "users/RECEIVE_USER",
  CLEAR_USER = "users/CLEAR_USER",
  UPDATE_USER = "users/UPDATE_USER",
  SET_ERRORS = "users/SET_ERRORS",
}
