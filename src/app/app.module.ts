import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'

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

@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    SidebarComponent,
    CategoriesListComponent,
    DeleteCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([ExpenseEffects, BudgetEffects, CategoryEffects]),
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
  ]
})
export class AppModule { }
