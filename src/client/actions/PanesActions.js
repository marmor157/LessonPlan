import { PANE_TYPES } from "../constants/PaneTypes";

export const hideTodayPane = () => ({
  type: PANE_TYPES.HIDE_TODAY_PANE
});

export const showTodayPane = () => ({
  type: PANE_TYPES.SHOW_TODAY_PANE
});

export const hideWeekPane = () => ({
  type: PANE_TYPES.HIDE_WEEK_PANE
});

export const showWeekPane = () => ({
  type: PANE_TYPES.SHOW_WEEK_PANE
});
