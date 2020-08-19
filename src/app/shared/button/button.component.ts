import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() class: 'main' | 'warn' | 'danger' = 'main';
  @Input() type: 'add'| 'edit' = 'add';
  @Input() link: string;
  @Input() loading: boolean;
  @Input() small: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  getTexto() {
    switch (this.type) {
      case 'add': return 'Adicionar';
      case 'edit': return 'Salvar';
    }
  }

  getIcone() {
    switch (this.type) {
      case 'add': return 'fa-plus';
      case 'edit': return 'fa-pencil-alt';
    }
  }

  getCor() {
    switch (this.type) {
      case 'add': return 'main';
      case 'edit': return 'second';
    }
  }

}
