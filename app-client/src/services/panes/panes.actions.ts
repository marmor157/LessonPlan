import { PanesEvents } from "./panes.consts";
import {
  makeActionWithoutPayload,
  IActionUnion,
} from "../../utils/actionsUtils";

export const hideTodayPane = makeActionWithoutPayload<
  PanesEvents.HIDE_TODAY_PANE
>(PanesEvents.HIDE_TODAY_PANE);

export const showTodayPane = makeActionWithoutPayload<
  PanesEvents.SHOW_TODAY_PANE
>(PanesEvents.SHOW_TODAY_PANE);

export const hideWeekPane = makeActionWithoutPayload<
  PanesEvents.HIDE_WEEK_PANE
>(PanesEvents.HIDE_WEEK_PANE);

export const showWeekPane = makeActionWithoutPayload<
  PanesEvents.SHOW_WEEK_PANE
>(PanesEvents.SHOW_WEEK_PANE);

const actions = {
  hideTodayPane,
  showTodayPane,
  hideWeekPane,
  showWeekPane,
};

export type IPanesActions = IActionUnion<typeof actions>;
