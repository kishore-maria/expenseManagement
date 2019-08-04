import { Action } from '@ngrx/store';

export enum SideBarActionTypes {
  NAVIGATE_TO = '[Sidebar] Redirect page.',
  NAVIGATE_TO_SUCCESS = '[Sidebar] Redirect page success.',
}

export class NavigateTo implements Action {
  readonly type = SideBarActionTypes.NAVIGATE_TO;
  constructor(public payload: String) {
  }
}

export class NavigateToSuccess implements Action {
  readonly type = SideBarActionTypes.NAVIGATE_TO_SUCCESS;
  constructor(public payload: String) {
  }
}

export type All = NavigateTo | NavigateToSuccess;