import { Action } from '@ngrx/store';
import { Category } from '../../models/category.model';

export enum CategoryActionTypes {
  ADD_CATEGORY = '[category] Add category.',
  ADD_CATEGORY_SUCCESS = '[category] Add category success.',
  GET_CATEGORIES = '[category] Get categories.',
  GET_CATEGORIES_SUCCESS = '[category] Get categories success.',
  DELETE_CATEGORY = '[category] delete category.',
  DELETE_CATEGORY_SUCCESS = '[category] delete category success.',
}

export class AddCategory implements Action {
  readonly type = CategoryActionTypes.ADD_CATEGORY;
  constructor(public payload: Category) {
  }
}

export class AddCategorySuccess implements Action {
  readonly type = CategoryActionTypes.ADD_CATEGORY_SUCCESS;
  constructor(public payload: Category) {
  }
}

export class GetCategories implements Action {
  readonly type = CategoryActionTypes.GET_CATEGORIES;
  constructor() {
  }
}

export class GetCategoriesSuccess implements Action {
  readonly type = CategoryActionTypes.GET_CATEGORIES_SUCCESS;
  constructor(public payload: Category[]) {
  }
}

export class DeleteCategory implements Action {
  readonly type = CategoryActionTypes.DELETE_CATEGORY;
  constructor(public payload: String) {
  }
}

export class DeleteCategorySuccess implements Action {
  readonly type = CategoryActionTypes.DELETE_CATEGORY_SUCCESS;
  constructor(public payload: Category) {
  }
}

export type All = AddCategory | AddCategorySuccess | GetCategories | GetCategoriesSuccess | DeleteCategory | DeleteCategorySuccess;