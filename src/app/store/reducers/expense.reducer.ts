import { ExpenseActionTypes, All } from '../actions/expense.action';
import { Expense } from '../../models/expense.model';
import * as cloneDeep from 'lodash/fp'

export interface State {
  expenses: Expense[];
  expense: Expense;
}

export const initialState: State = {
  expenses: [],
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
        expenses: [...state.expenses, action.payload]
      };
    }
    case ExpenseActionTypes.UPDATE_EXPENSE: {
      return {
        ...state,
      };
    }
    case ExpenseActionTypes.UPDATE_EXPENSE_SUCCESS: {
      return {
        ...state,
        expenses: state.expenses.map(
          expense => { 
            if(expense._id === action.payload._id) {
              return action.payload;
            }
            return expense
          }
        )
      };
    }
    case ExpenseActionTypes.GET_EXPENSES: {
      return {
        ...state,
      };
    }
    case ExpenseActionTypes.GET_EXPENSES_SUCCESS: {
      return {
        ...state,
        expenses: action.payload
      };
    }
    case ExpenseActionTypes.SELECT_EXPENSE: {
      return {
        ...state,
      };
    }
    case ExpenseActionTypes.SELECT_EXPENSE_SUCCESS: {
      let data = cloneDeep(action.payload)
      return {
        ...state,
        expense: data
      };
    }
    case ExpenseActionTypes.OPEN_ADD_EXPENSE_DIALOG: {
      return {
        ...state,
      };
    }
    case ExpenseActionTypes.CLOSE_ADD_EXPENSE_DIALOG: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
}