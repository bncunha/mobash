import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {
  @Input() estaVazio: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
