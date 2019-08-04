import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, empty } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { NavigateTo, SideBarActionTypes, NavigateToSuccess } from '../actions/sideBar.action';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.states';

@Injectable()
export class SideBarEffects {

  constructor(public actions: Actions, public router: Router, public store: Store<AppState>) {
  }

  @Effect()
  NavigateTo: Observable<any> = this.actions.pipe(
    ofType(SideBarActionTypes.NAVIGATE_TO),
    map((action: NavigateTo) => action.payload),
    switchMap((payload) => {
      if (!payload)
        payload = ''
      let url = [payload]
      this.router.navigate(url)
      this.store.dispatch(new NavigateToSuccess(payload))
      return empty();
    })
  )

}