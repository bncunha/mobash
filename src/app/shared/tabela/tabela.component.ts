import { Component, OnInit, Input, ContentChild, ViewChild, EventEmitter, Output, ViewChildren, QueryList, ContentChildren, TemplateRef } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ColunaEdicaoComponent } from './coluna-edicao/coluna-edicao.component';
import { CustomColumDirective } from './custom-colum.directive';

export type TableCol = {
  name: string;
  bindValue?: string;
  type?: string;
  edit?: boolean;
  customColum?: string;
  control?: AbstractControl;
};

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {
  @ViewChildren(ColunaEdicaoComponent) colunasEmEdicao: QueryList<ColunaEdicaoComponent>;
  @ContentChildren(CustomColumDirective) customColuns: QueryList<CustomColumDirective>;

  @Output() adicionar = new EventEmitter();
  @Output() editar = new EventEmitter();
  @Output() deletar = new EventEmitter();
  @Input() cols: TableCol[];
  @Input() data: any[];
  @Input() canEdit = false;

  indiceEdicao: number = null;
  showAddRow = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.customColuns.toArray());
    }, 1000);
  }

  get estaVazio(): boolean {
    return this.data && !this.data.length;
  }

  getColValue(item: any, col: TableCol): any {
    return item[col.bindValue];
  }

  botaoAddClicado(): void {
    this.cancelar();
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

  deletarClick(itemOriginal: any): void {
    this.deletar.emit(itemOriginal);
  }

  editarLinha(item: any, index: number): void {
    this.cancelar();
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

  getCustomColum(colum: string) {
    const finded = this.customColuns.find(c => c.appCustomColum === colum);
    return finded && finded.template;
  }
}
