import { Action } from '@ngrx/store';
import { Category } from '../../models/category.model';

export enum CategoryActionTypes {
  SELECT_CATEGORY = '[category] Select category.',
  ADD_CATEGORY = '[category] Add category.',
  ADD_CATEGORY_SUCCESS = '[category] Add category success.',
  GET_CATEGORIES = '[category] Get categories.',
  GET_CATEGORIES_SUCCESS = '[category] Get categories success.',
  DELETE_CATEGORY = '[category] delete category.',
  DELETE_CATEGORY_SUCCESS = '[category] delete category success.',
  OPEN_DELETE_CATEGORY_DIALOG = '[category] open delete category dialog.',
  CLOSE_DELETE_CATEGORY_DIALOG = '[category] close delete category dialog.',
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

export class SelectCategory implements Action {
  readonly type = CategoryActionTypes.SELECT_CATEGORY;
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

export class OpenDeleteCategoryDialog implements Action {
  readonly type = CategoryActionTypes.OPEN_DELETE_CATEGORY_DIALOG;
  constructor(public payload: Category) {
  }
}

export class CloseDeleteCategoryDialog implements Action {
  readonly type = CategoryActionTypes.CLOSE_DELETE_CATEGORY_DIALOG;
  constructor() {
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

export type All = AddCategory | AddCategorySuccess | GetCategories | GetCategoriesSuccess | DeleteCategory | DeleteCategorySuccess | OpenDeleteCategoryDialog | SelectCategory | CloseDeleteCategoryDialog;