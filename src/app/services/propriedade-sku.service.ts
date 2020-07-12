import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pipe, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropriedadeSkuService {
  loadingGetProdutos = false;

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<any> {
    this.loadingGetProdutos = true;
    return this.http.get(`${environment.backend}/propriedades-sku`).pipe(
      finalize(() => this.loadingGetProdutos = false)
    );
  }
}
