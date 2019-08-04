import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState, getCategories, getExpense } from 'src/app/store/app.states';
import { AddExpense, SelectExpenseSuccess, UpdateExpense } from 'src/app/store/actions/expense.action';
import { MessageService } from 'src/app/services/message.service';
import { Expense } from 'src/app/models/expense.model';
import { GetCategories } from 'src/app/store/actions/category.action';
import { Category } from 'src/app/models/category.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-expense-form',
  templateUrl: './add-expense-form.component.html',
  styleUrls: ['./add-expense-form.component.scss']
})
export class AddExpenseFormComponent implements OnInit, OnDestroy {

  expenseAddForm: FormGroup

  expense: Expense;

  categories: Category[]

  subscriptions: Subscription[] = [];

  constructor(private formBuilder: FormBuilder, public store: Store<AppState>, public messageService: MessageService) { }

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
    let expenseState: Observable<Expense> = this.store.select(getExpense)
    let expenseDetail = expenseState.subscribe(expense => {
      if (expense && expense['__wrapped__']) {
        expense = expense['__wrapped__']
        this.expenseAddForm = this.formBuilder.group({
          _id: [expense._id],
          category: [expense.category, Validators.required],
          name: [expense.name, Validators.required],
          amount: [expense.amount, Validators.required],
          date: [expense.date, Validators.required],
        });
        this.expense = expense
      } else {
        this.expenseAddForm = this.formBuilder.group({
          _id: null,
          category: ['', Validators.required],
          name: ['', Validators.required],
          amount: ['', Validators.required],
          date: [new Date(), Validators.required],
        });
        this.expense = null
      }
    })
    this.subscriptions.push(expenseDetail)
  }

  newExpense() {
    this.store.dispatch(new SelectExpenseSuccess(null))
  }

  onSubmit() {
    if (!this.expense)
      return this.messageService.showError("Please enter the value(s)")
    if (this.expense._id)
      this.update()
    else
      this.create()
  }

  create() {
    let isErr = this.validate()
    if (isErr)
      return this.messageService.showError("Please enter the value(s)")
    this.store.dispatch(new AddExpense(this.expense))
  }

  update() {
    let isErr = this.validate()
    if (isErr)
      return this.messageService.showError("Please enter the value(s)")
    this.store.dispatch(new UpdateExpense(this.expense))
  }

  validate() {
    if (this.expense && this.expense._id)
      var expenseId = this.expense._id
    this.expense = {
      _id: expenseId,
      name: this.expenseAddForm.controls.name.value,
      category: this.expenseAddForm.controls.category.value,
      amount: this.expenseAddForm.controls.amount.value,
      date: this.expenseAddForm.controls.date.value,
    }
    return !this.expense.name || !this.expense.category || !this.expense.amount || !this.expense.date
  }

  ngOnDestroy() {
    this.subscriptions.map(subscription => subscription.unsubscribe())
  }

}
