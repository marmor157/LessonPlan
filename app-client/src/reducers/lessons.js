import { LESSONS_TYPES } from "../constants/LessonsTypes";

const initialState = {
  lessons: [],
  errors: {},
  isLoading: false,
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LESSONS_TYPES.REQUEST_LESSON: {
      return {
        ...state,
        isLoading: true,
        errors: {},
      };
    }

    case LESSONS_TYPES.RECEIVE_LESSONS: {
      return {
        isLoading: false,
        errors: {},
        lessons: action.payload,
      };
    }

    case LESSONS_TYPES.SET_ERRORS: {
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    }

    default:
      return state;
  }
}
