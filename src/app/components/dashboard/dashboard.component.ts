import { Component, OnInit } from '@angular/core';
import { OpenAddExpenseDialog, SelectExpenseSuccess } from '../../store/actions/expense.action';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.states';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
  }

  openExpenseForm() {
    this.store.dispatch(new SelectExpenseSuccess(null))
    this.store.dispatch(new OpenAddExpenseDialog())
  }

}
