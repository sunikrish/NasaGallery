import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from 'src/model/gallary';

@Component({
  selector: 'app-dilogue',
  templateUrl: './dilogue.component.html',
  styleUrls: ['./dilogue.component.css']
})
export class DilogueComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Data,
    public dialogRef: MatDialogRef<DilogueComponent>) { }
   
    close(): void {
    this.dialogRef.close();
    }


  ngOnInit(): void {
  }

}




export class SimpleDialogComponent {

 constructor(
 public dialogRef: MatDialogRef<SimpleDialogComponent>) { }

 close(): void {
 this.dialogRef.close();
 }
}
