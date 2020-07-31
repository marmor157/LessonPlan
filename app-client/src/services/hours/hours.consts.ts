export interface IHour {
  id: string;
  startHour: number;
  finishHour: number;
}

export interface IHoursState {
  hours: Array<IHour>;
  errors: any;
  isLoading: boolean;
}

export enum HoursEvents {
  REQUEST_HOUR = "hours/REQUEST_HOUR",
  RECEIVE_HOURS = "hours/RECEIVE_HOURS",
  RECEIVE_HOUR = "hours/RECEIVE_HOUR",
  SET_ERRORS = "hours/SET_HOURS",
}
