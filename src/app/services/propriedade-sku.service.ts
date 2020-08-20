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
export class PropriedadeSkuService {
  loadingGetPropriedades = false;
  loadingSalvarProriedade = false;
  loadingEditarProriedade = false;

  constructor(
    private http: HttpClient,
    private api: ApiService
  ) { }

  getPropriedades(): Observable<any> {
    this.loadingGetPropriedades = true;
    return this.http.get(`${environment.backend}/propriedades-sku`).pipe(
      finalize(() => this.loadingGetPropriedades = false)
    );
  }

  salvarPropriedade(model: PropriedadeSku): Observable<any> {
    this.loadingSalvarProriedade = true;
    return this.api.salvar('propriedades-sku', model, () => this.loadingSalvarProriedade = false);
  }

  editarPropriedade(model: PropriedadeSku): Observable<any> {
    this.loadingEditarProriedade = true;
    return this.api.editar('propriedades-sku/' + model.idPropriedadeSku , model, () => this.loadingEditarProriedade = false);
  }
}
