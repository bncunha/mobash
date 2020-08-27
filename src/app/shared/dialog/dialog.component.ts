import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @ViewChild('content') content: TemplateRef<any>;
  @Input() titulo: string;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  dialogRef: any;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
  }

  open() {
    this.dialogRef = this.dialog.open(this.content, {
      width: this.getWidth()
    });
  }

  getWidth() {
    switch (this.size) {
      case 'sm': return '300px';
      case 'md': return '760px';
      case 'lg': return '991px';
    }
  }

}
