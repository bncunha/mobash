import { Directive, ElementRef, OnInit, HostListener, DoCheck, Renderer2 } from '@angular/core';
import { NgControl, FormControl, AbstractControl } from '@angular/forms';
import { mensagensValidacao } from './mensagens-validacao';

@Directive({
  selector: '[appFormValidator]'
})
export class FormValidatorDirective implements OnInit, DoCheck {
  control: AbstractControl;
  mensagemComponent: any;

  constructor(
    private el: ElementRef,
    private ngControl: NgControl,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.control = this.ngControl.control;
  }

  ngDoCheck() {
    if (this.control) {
      if (this.control.touched && this.control.dirty && this.control.invalid) {
        this.criarMensagemComponente(this.getMensagemDeErro());
      } else {
        this.removerMensagemComponente();
      }
    }
  }

  criarMensagemComponente(msg: string) {
    if (!this.mensagemComponent) {
      const parent = this.renderer.parentNode(this.el.nativeElement);
      const texto = this.renderer.createText(msg || 'Inválido!');
      this.mensagemComponent = this.renderer.createElement('small');
      this.renderer.setStyle(this.mensagemComponent, 'color', 'red');
      this.renderer.appendChild(this.mensagemComponent, texto);
      this.renderer.appendChild(parent, this.mensagemComponent);
    }
  }

  removerMensagemComponente() {
    if (this.mensagemComponent) {
      const parent = this.renderer.parentNode(this.el.nativeElement);
      this.renderer.removeChild(parent, this.mensagemComponent);
      this.mensagemComponent = null;
    }
  }

  getMensagemDeErro() {
    const erros = Object.keys(this.control.errors);
    return erros.length ? mensagensValidacao[erros[0]] : null;
  }
}
