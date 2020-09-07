import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pipe, Observable } from 'rxjs';
import { finalize, tap, catchError } from 'rxjs/operators';
import { PropriedadeSku } from '../models/PropriedadeSku';
import { AlertPopupService } from '../shared/alert-popup/alert-popup.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class OpcaoPropriedadeSkuService {
  loadingGetPropriedades = false;
  loadingFindByPropriedade = false;

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
    return this.api.listar(`opcoes-propriedades/findByPropriedade/${idPropriedade}`).pipe(
      finalize(() => this.loadingFindByPropriedade = false)
    );
  }
}
