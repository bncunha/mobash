import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-coluna-edicao',
  templateUrl: './coluna-edicao.component.html',
  styleUrls: ['./coluna-edicao.component.scss']
})
export class ColunaEdicaoComponent implements OnInit {
  @ViewChild('inputText') inputText: ElementRef;
  @Output() itemChange = new EventEmitter();
  @Input() item: any;
  @Input() name: string;
  @Input() type: string;
  @Input() control: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

  updateItem(value) {
    this.item[this.name] = value;
    this.itemChange.emit(this.item);
  }

}
