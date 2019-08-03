import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../components/snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(public snackBar: MatSnackBar) { }

  showError(msg) {
    this.snackBar.open(msg, "error", {duration: 2000});
  }

  showSuccess(msg) {
    this.snackBar.open(msg, "success", {duration: 2000});
  }

}
