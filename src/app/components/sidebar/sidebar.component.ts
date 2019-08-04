import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, getPageUrl } from 'src/app/store/app.states';
import { NavigateTo, NavigateToSuccess } from 'src/app/store/actions/sideBar.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];

  currentUrl: String;

  constructor(public store: Store<AppState>, public router: Router) { }

  ngOnInit() {
    if (this.router.url === '/')
      this.store.dispatch(new NavigateToSuccess(''))
    else
      this.store.dispatch(new NavigateToSuccess('setting'))
    let sideBarState: Observable<any> = this.store.select(getPageUrl)
    let pageUrl = sideBarState.subscribe(url => {
      this.currentUrl = url
    })
    this.subscriptions.push(pageUrl)
  }

  navigateTo(url) {
    this.store.dispatch(new NavigateTo(url))
  }

  ngOnDestroy() {
    this.subscriptions.map(subscription => subscription.unsubscribe())
  }

}
