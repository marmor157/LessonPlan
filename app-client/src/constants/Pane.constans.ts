export interface IPanesState {
  isTodayPaneShown: boolean;
  isWeekPaneShown: boolean;
}

export enum PanesEvents {
  SHOW_TODAY_PANE = "panes/SHOW_TODAY_PANE",
  HIDE_TODAY_PANE = "panes/HIDE_TODAY_PANE",
  SHOW_WEEK_PANE = "panes/SHOW_WEEK_PANE",
  HIDE_WEEK_PANE = "panes/HIDE_WEEK_PANE",
}
