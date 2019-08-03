import { BudgetActionTypes, All } from '../actions/budget.action';
import { Budget } from '../../models/budget.model';

export interface State {
  budget: Budget
}

export const initialState: State = {
  budget: null
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case BudgetActionTypes.UPDATE_BUDGET: {
      return {
        ...state,
      };
    }
    case BudgetActionTypes.UPDATE_BUDGET_SUCCESS: {
      return {
        ...state,
        budget: action.payload
      };
    }
    case BudgetActionTypes.GET_BUDGET: {
      return {
        ...state,
      };
    }
    case BudgetActionTypes.GET_BUDGET_SUCCESS: {
      return {
        ...state,
        budget: action.payload
      };
    }
    default: {
      return state;
    }
  }
}