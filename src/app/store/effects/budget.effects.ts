import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, empty } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../app.states';
import { BudgetActionTypes, UpdateBudget, UpdateBudgetSuccess, GetBudget, GetBudgetOverview, GetBudgetOverviewSuccess } from '../actions/budget.action';
import { BudgetService } from '../../services/budget.service';
import { Budget } from '../../models/budget.model';
import { MessageService } from '../../services/message.service';
import { BudgetOverview } from 'src/app/models/budget-overview.model';

@Injectable()
export class BudgetEffects {

  constructor(public actions: Actions, public store: Store<AppState>, public budgetService: BudgetService, public messageService: MessageService) {
  }

  @Effect()
  GetBudgetOverview: Observable<any> = this.actions.pipe(
    ofType(BudgetActionTypes.GET_BUDGET_OVERVIEW),
    map((action: GetBudgetOverview) => action),
    switchMap(() => {
      return this.budgetService.getBudgetOverview().pipe(
        map((result: BudgetOverview) => {
          return new GetBudgetOverviewSuccess(result)
        }),
        catchError(error => {
          let messages = []
          messages.push(error.error)
          // this.messageService.showError(messages)
          return empty();
        })
      )
    })
  )

  @Effect()
  GetBudget: Observable<any> = this.actions.pipe(
    ofType(BudgetActionTypes.GET_BUDGET),
    map((action: GetBudget) => action),
    switchMap(() => {
      return this.budgetService.getBudget().pipe(
        map((result: Budget) => {
          return new UpdateBudgetSuccess(result)
        }),
        catchError(error => {
          let msg = error.error
          // this.messageService.showError(msg)
          return empty();
        })
      )
    })
  )

  @Effect()
  UpdateBudget: Observable<any> = this.actions.pipe(
    ofType(BudgetActionTypes.UPDATE_BUDGET),
    map((action: UpdateBudget) => action.payload),
    switchMap((payload) => {
      return this.budgetService.updateBudget(payload).pipe(
        map((result: Budget) => {
          let msg = "Budget successfully updated."
          this.messageService.showSuccess(msg)
          this.store.dispatch(new GetBudgetOverview)
          return new UpdateBudgetSuccess(result)
        }),
        catchError(error => {
          let msg = error.error
          this.messageService.showError(msg)
          return empty();
        })
      )
    })
  )

}