import { ExpenseActionTypes, All } from '../actions/expense.action';
import { Expense } from '../../models/expense.model';

export interface State {
  expenses: Expense[];
  expense: Expense;
}

export const initialState: State = {
  expenses: null,
  expense: null
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case ExpenseActionTypes.ADD_EXPENSE: {
      return {
        ...state,
      };
    }
    case ExpenseActionTypes.ADD_EXPENSE_SUCCESS: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
}