import { LessonsEvents, ILessonsState } from "./lessons.consts";
import { ILessonsActions } from "./lessons.actions";

const initialState: ILessonsState = {
  lessons: [],
  errors: {},
  isLoading: false,
};

export const reducer = (
  state: ILessonsState = initialState,
  action: ILessonsActions
): ILessonsState => {
  switch (action.type) {
    case LessonsEvents.REQUEST_LESSON: {
      return {
        ...state,
        isLoading: true,
        errors: {},
      };
    }

    case LessonsEvents.RECEIVE_LESSONS: {
      return {
        isLoading: false,
        errors: {},
        lessons: action.payload,
      };
    }

    case LessonsEvents.SET_ERRORS: {
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
