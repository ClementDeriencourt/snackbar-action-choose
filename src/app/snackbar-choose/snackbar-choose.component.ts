import {Component} from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-choose',
  templateUrl: './snackbar-choose.component.html',
  styleUrls: ['./snackbar-choose.component.css']
})
export class SnackbarChooseComponent  {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start'; //creation variable position horizontale
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'; //creation variable position verticale

  constructor(private _snackBar: MatSnackBar) {} //creation variable snackbar pour le click

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {

/*      openSnackBar() {
        this._snackBar.open('Cannonball!!', 'End now', {*/ //afficher avec les mots choisis

      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
