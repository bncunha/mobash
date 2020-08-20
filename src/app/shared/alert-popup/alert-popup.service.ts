import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertPopupService {
  notificarSucesso = new Subject();
  notificarErro = new Subject();
  notificarPergunta = new Subject();

  constructor() { }

  showSucesso() {
    this.notificarSucesso.next();
  }

  showError(message: string) {
    this.notificarErro.next(message);
  }

  showPergunta(msg: string, confirm?, cancel?) {
    this.notificarPergunta.next({msg, confirm, cancel});
  }
}
