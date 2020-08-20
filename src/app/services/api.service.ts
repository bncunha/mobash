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
}
