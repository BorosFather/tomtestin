import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  constructor(private dialog: MatDialog){

  }

  openDialog(){
    this.dialog.open(PopupComponent);
  }

}
