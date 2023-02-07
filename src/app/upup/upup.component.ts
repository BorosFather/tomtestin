import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-upup',
  templateUrl: './upup.component.html',
  styleUrls: ['./upup.component.scss']
})
export class UpupComponent {

  constructor(public dialog: MatDialog){

  }

  openDialog(){
    this.dialog.open(PopupComponent);
  }
  
}
