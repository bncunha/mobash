import { Component, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { AlertPopupService } from './alert-popup.service';

@Component({
  selector: 'app-alert-popup',
  templateUrl: './alert-popup.component.html',
  styleUrls: ['./alert-popup.component.scss']
})
export class AlertPopupComponent implements OnInit {
  @ViewChild('sucessoAlert') sucessoAlert: SwalComponent;
  @ViewChild('erroAlert') erroAlert: SwalComponent;
  @ViewChild('perguntaAlert') perguntaAlert: SwalComponent;

  text: string;
  onConfirm: any;
  onCancel: any;

  constructor(
    private alertPopupService: AlertPopupService
  ) { }

  ngOnInit(): void {
    this.alertPopupService.notificarSucesso.subscribe(() => this.showSucesso());
    this.alertPopupService.notificarErro.subscribe((msg) => this.showErro(msg));
    this.alertPopupService.notificarPergunta.subscribe(({msg, confirm, cancel}) => this.showPergunta(msg, confirm, cancel));
  }

  showSucesso() {
    this.text = null;
    setTimeout(() => {
      this.sucessoAlert.fire();
    });
  }

  showErro(text) {
    this.text = text;
    setTimeout(() => {
      this.erroAlert.fire();
    });
  }

  showPergunta(text, onConfirm?, onCancel?) {
    this.text = text;
    this.onConfirm = onConfirm;
    this.onCancel = onCancel;
    setTimeout(() => {
      this.perguntaAlert.fire();
    });
  }

  confirm() {
    if (this.onConfirm) {
      this.onConfirm();
    }
  }

  cancel() {
    if (this.onCancel) {
      this.onCancel();
    }
  }

}
