import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../../../../models/category.model';
import { getCategories, AppState } from '../../../../store/app.states';
import { Store } from '@ngrx/store';
import { GetCategories } from '../../../../store/actions/category.action';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit, OnDestroy {

  categories: Category[];

  subscriptions: Subscription[] = [];

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetCategories())
    let categoryState: Observable<Category[]> = this.store.select(getCategories)
    let categoryStateDetail = categoryState.subscribe(categories => {
      if (categories)
        this.categories = categories
      else
        this.categories = []
    })
    this.subscriptions.push(categoryStateDetail)
  }

  ngOnDestroy() {
    this.subscriptions.map(subscription => subscription.unsubscribe())
  }

}
