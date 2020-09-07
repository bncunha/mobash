import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AlertPopupService } from '../shared/alert-popup/alert-popup.service';
import { tap, catchError, finalize, delay } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private alert: AlertPopupService
  ) { }

  listar(url: string, params?: any, onFinalize?) {
    return this.http.get(`${environment.backend}/${url}`, {params}).pipe(
      catchError(err => { this.alert.showError(err.error && err.error.message); return throwError(err); }),
      finalize(() => onFinalize && onFinalize())
    );
  }

  salvar(url: string, data: any, onFinalize?) {
    return this.http.post(`${environment.backend}/${url}`, data).pipe(
      tap(() => this.alert.showSucesso()),
      catchError(err => { this.alert.showError(err.error && err.error.message); return throwError(err); }),
      finalize(() => onFinalize && onFinalize())
    );
  }

  editar(url: string, data: any, onFinalize?) {
    return this.http.put(`${environment.backend}/${url}`, data).pipe(
      tap(() => this.alert.showSucesso()),
      catchError(err => { this.alert.showError(err.error && err.error.message); return throwError(err); }),
      finalize(() => onFinalize && onFinalize())
    );
  }

  deletar(url: string, onSucces?, onError?, onFinalize?) {
    const request = this.http.delete(`${environment.backend}/${url}`).pipe(
      tap(() => this.alert.showSucesso()),
      catchError(err => { this.alert.showError(err.error && err.error.message); return throwError(err); }),
      finalize(() => onFinalize && onFinalize())
    );
    this.alert.showPergunta('Deseja deletar?', () => {
      request.subscribe((r) => onSucces && onSucces(r), (err) => onError && onError(err));
    });
  }
}
