import { Component, OnInit, Input, ContentChild, ViewChild, EventEmitter, Output, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ColunaEdicaoComponent } from './coluna-edicao/coluna-edicao.component';

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
  @ViewChildren(ColunaEdicaoComponent) colunasEmEdicao: QueryList<ColunaEdicaoComponent>;
  @Output() adicionar = new EventEmitter();
  @Output() editar = new EventEmitter();
  @Input() cols: TableCol[];
  @Input() data: any[];
  @Input() canEdit = false;

  indiceEdicao: number = null;
  showAddRow = false;

  constructor() { }

  ngOnInit(): void {
  }

  get estaVazio(): boolean {
    return this.data && !this.data.length;
  }

  getColValue(item: any, col: TableCol): any {
    return item[col.bindValue];
  }

  botaoAddClicado(): void {
    this.showAddRow = true;
    if (this.colunasEmEdicao) {
      setTimeout(() => {
        this.colunasEmEdicao.toArray()[0].inputText.nativeElement.focus();
      });
    }
  }

  cancelar(): void {
    this.showAddRow = false;
    this.indiceEdicao = null;
    if (this.cols) {
      this.cols.forEach(colum => colum.control && colum.control.reset());
    }
  }

  salvar(itemOrigignal): void {
    this.showAddRow ? this.adicionar.emit() : this.editar.emit(itemOrigignal);
  }

  editarLinha(item: any, index: number): void {
    this.indiceEdicao = index;
    this.cols.forEach(col => {
      if (col.control) {
        col.control.patchValue(this.getColValue(item, col));
      }
    });
  }

  isEditandoLinha(indiceLinha) {
    return this.indiceEdicao !== null && this.indiceEdicao === indiceLinha;
  }
}
