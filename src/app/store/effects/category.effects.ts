import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, empty } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../app.states';
import { MessageService } from '../../services/message.service';
import { AddCategory, CategoryActionTypes, AddCategorySuccess, DeleteCategory, DeleteCategorySuccess, GetCategories, GetCategoriesSuccess } from '../actions/category.action';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Injectable()
export class CategoryEffects {

  constructor(public actions: Actions, public store: Store<AppState>, public messageService: MessageService, public categoryService: CategoryService) {
  }

  @Effect()
  DeleteCategory: Observable<any> = this.actions.pipe(
    ofType(CategoryActionTypes.DELETE_CATEGORY),
    map((action: DeleteCategory) => action.payload),
    switchMap((payload) => {
      return this.categoryService.deleteCategories(payload).pipe(
        map((result: Category) => {
          console.log(result)
          let msg = "Category successfully deleted."
          this.messageService.showSuccess(msg)
          return new DeleteCategorySuccess(result)
        }),
        catchError(error => {
          let msg = error.error
          this.messageService.showError(msg)
          return empty();
        })
      )
    })
  )

  @Effect()
  AddCategory: Observable<any> = this.actions.pipe(
    ofType(CategoryActionTypes.ADD_CATEGORY),
    map((action: AddCategory) => action.payload),
    switchMap((payload) => {
      return this.categoryService.addCategory(payload).pipe(
        map((result: Category) => {
          let msg = "Category successfully added."
          this.messageService.showSuccess(msg)
          return new AddCategorySuccess(result)
        }),
        catchError(error => {
          let msg = error.error
          this.messageService.showError(msg)
          return empty();
        })
      )
    })
  )

  @Effect()
  GetCategories: Observable<any> = this.actions.pipe(
    ofType(CategoryActionTypes.GET_CATEGORIES),
    map((action: GetCategories) => action),
    switchMap(() => {
      return this.categoryService.getCategories().pipe(
        map((result: Category[]) => {
          return new GetCategoriesSuccess(result)
        }),
        catchError(error => {
          return empty();
        })
      )
    })
  )

}