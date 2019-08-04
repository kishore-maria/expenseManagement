import { All, SideBarActionTypes } from '../actions/sideBar.action';

export interface State {
  currentPage: String
}

export const initialState: State = {
  currentPage: ''
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case SideBarActionTypes.NAVIGATE_TO: {
      return {
        ...state,
      };
    }
    case SideBarActionTypes.NAVIGATE_TO_SUCCESS: {
      return {
        ...state,
        currentPage: action.payload
      };
    }
    default: {
      return state;
    }
  }
}