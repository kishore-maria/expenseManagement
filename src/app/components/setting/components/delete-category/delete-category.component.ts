import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getCategory } from '../../../../store/app.states';
import { Category } from '../../../../models/category.model';
import { Subscription, Observable } from 'rxjs';
import { CloseDeleteCategoryDialog, DeleteCategory } from '../../../../store/actions/category.action';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss']
})
export class DeleteCategoryComponent implements OnInit, OnDestroy {
  
  category: Category;

  subscriptions: Subscription[] = [];

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    let categoryState: Observable<Category> = this.store.select(getCategory)
    let categoryStateDetail = categoryState.subscribe(category => {
      if (category)
        this.category = category
      else
        this.category = null
    })
    this.subscriptions.push(categoryStateDetail)
  }

  cancel() {
    this.store.dispatch(new CloseDeleteCategoryDialog())
  }

  deleteCategory(category) {
    this.store.dispatch(new DeleteCategory(category))
  }

  ngOnDestroy() {
    this.subscriptions.map(subscription => subscription.unsubscribe())
  }

}
