import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule, MatNativeDateModule } from '@angular/material'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingComponent } from './components/setting/setting.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.states';
import { EffectsModule } from '@ngrx/effects';
import { ExpenseEffects } from './store/effects/expense.effects';
import { environment } from '../environments/environment.prod';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BudgetEffects } from './store/effects/budget.effects';
import { MatDialogModule, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { CategoryEffects } from './store/effects/category.effects';
import { CategoriesListComponent } from './components/setting/components/categories-list/categories-list.component';
import { DeleteCategoryComponent } from './components/setting/components/delete-category/delete-category.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExpenseListComponent } from './components/dashboard/components/expense-list/expense-list.component';
import { AddExpenseFormComponent } from './components/dashboard/components/add-expense-form/add-expense-form.component';
import { SideBarEffects } from './store/effects/sideBar.effects';

@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    SidebarComponent,
    CategoriesListComponent,
    DeleteCategoryComponent,
    DashboardComponent,
    ExpenseListComponent,
    AddExpenseFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([ExpenseEffects, BudgetEffects, CategoryEffects, SideBarEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }
  ],
  bootstrap: [AppComponent],
  exports: [
    BrowserAnimationsModule,
    DeleteCategoryComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  entryComponents: [
    DeleteCategoryComponent,
    AddExpenseFormComponent,
  ]
})
export class AppModule { }
