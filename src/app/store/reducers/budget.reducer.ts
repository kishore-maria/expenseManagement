import { BudgetActionTypes, All } from '../actions/budget.action';
import { Budget } from '../../models/budget.model';
import { BudgetOverview } from 'src/app/models/budget-overview.model';

export interface State {
  budget: Budget
  budgetDetail: BudgetOverview
}

export const initialState: State = {
  budget: null,
  budgetDetail: {
    totalBudget: 0,
    totalExpense: 0,
    totalPercentage: 0,
    remaining: 0
  }
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
    case BudgetActionTypes.GET_BUDGET_OVERVIEW: {
      return {
        ...state,
      };
    }
    case BudgetActionTypes.GET_BUDGET_OVERVIEW_SUCCESS: {
      return {
        ...state,
        budgetDetail: action.payload
      };
    }
    default: {
      return state;
    }
  }
}