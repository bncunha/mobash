import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pipe, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { PropriedadeSku } from '../models/PropriedadeSku';

@Injectable({
  providedIn: 'root'
})
export class PropriedadeSkuService {
  loadingGetPropriedades = false;
  loadingSalvarProriedade = false;

  constructor(private http: HttpClient) { }

  getPropriedades(): Observable<any> {
    this.loadingGetPropriedades = true;
    return this.http.get(`${environment.backend}/propriedades-sku`).pipe(
      finalize(() => this.loadingGetPropriedades = false)
    );
  }

  salvarPropriedade(model: PropriedadeSku): Observable<any> {
    this.loadingSalvarProriedade = true;
    return this.http.post(`${environment.backend}/propriedades-sku`, model).pipe(
      finalize(() => this.loadingSalvarProriedade = false)
    );
  }
}
