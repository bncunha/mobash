import { Component, OnInit, Input, ContentChild, ViewChild } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

export type TableCol = {
  name: string;
  bindValue: string;
  type?: string;
  edit?: boolean;
  control?: AbstractControl;
};

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {
  @Input() cols: TableCol[];
  @Input() data: any[];
  @Input() addForm: FormGroup;

  novoItem = {};
  constructor() { }

  ngOnInit(): void {
  }

  get estaVazio() {
    return this.data && !this.data.length;
  }

  getColValue(item, col) {
    return item[col.bindValue];
  }

}
