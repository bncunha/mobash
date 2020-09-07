import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pipe, Observable } from 'rxjs';
import { finalize, tap, catchError } from 'rxjs/operators';
import { PropriedadeSku } from '../models/PropriedadeSku';
import { AlertPopupService } from '../shared/alert-popup/alert-popup.service';
import { ApiService } from './api.service';
import { OpcaoPropriedadeSku } from '../models/OpcaoPropriedadeSku';

@Injectable({
  providedIn: 'root'
})
export class OpcaoPropriedadeSkuService {
  loadingGetPropriedades = false;
  loadingFindByPropriedade = false;
  loadingCriar = false;
  loadingEditar = false;
  loadingDeletar = false;

  constructor(
    private api: ApiService
  ) { }

  getOpcoes(): Observable<any> {
    this.loadingGetPropriedades = true;
    return this.api.listar(`opcoes-propriedades`).pipe(
      finalize(() => this.loadingGetPropriedades = false)
    );
  }

  getOpcoesByPropriedade(idPropriedade: number) {
    this.loadingFindByPropriedade = true;
    return this.api.listar(`opcoes-propriedades/findByPropriedade/${idPropriedade}`, null,
      () => this.loadingFindByPropriedade = false
    );
  }

  novoOpcao(opcao: OpcaoPropriedadeSku) {
    this.loadingCriar = true;
    return this.api.salvar(`opcoes-propriedades`, opcao, () => this.loadingCriar = false);
  }

  editar(opcao: OpcaoPropriedadeSku) {
    this.loadingEditar = true;
    return this.api.editar(`opcoes-propriedades/${opcao.idOpcaoPropriedadeSKU}`, opcao, () => this.loadingEditar = false);
  }

  deletar(id: number, onSucces?, onError?): void {
    this.loadingDeletar = true;
    return this.api.deletar('opcoes-propriedades/' + id, onSucces, onError, () => this.loadingDeletar = false);
  }
}
