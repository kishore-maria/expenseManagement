import { CategoryActionTypes, All } from '../actions/category.action';
import { Category } from '../../models/category.model';

export interface State {
  category: Category;
  categories: Category[];
}

export const initialState: State = {
  category: null,
  categories: [],
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case CategoryActionTypes.ADD_CATEGORY: {
      return {
        ...state,
      };
    }
    case CategoryActionTypes.ADD_CATEGORY_SUCCESS: {
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };
    }
    case CategoryActionTypes.GET_CATEGORIES: {
      return {
        ...state,
      };
    }
    case CategoryActionTypes.SELECT_CATEGORY: {
      return {
        ...state,
        category: action.payload
      };
    }
    case CategoryActionTypes.GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: action.payload
      };
    }
    case CategoryActionTypes.OPEN_DELETE_CATEGORY_DIALOG: {
      return {
        ...state,
      };
    }
    case CategoryActionTypes.CLOSE_DELETE_CATEGORY_DIALOG: {
      return {
        ...state,
      };
    }
    case CategoryActionTypes.DELETE_CATEGORY: {
      return {
        ...state,
      };
    }
    case CategoryActionTypes.DELETE_CATEGORY_SUCCESS: {
      return {
        ...state,
        categories: state.categories.filter(category => category.name !== action.payload.name)
      };
    }
    default: {
      return state;
    }
  }
}