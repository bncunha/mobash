import { Component, OnInit, Input } from '@angular/core';
import { TableCol } from 'src/app/shared/tabela/tabela.component';
import { OpcaoPropriedadeSkuService } from 'src/app/services/opcao-propriedade-sku.service';
import { FormGroup } from '@angular/forms';
import { OpcaoPropriedadeSku } from 'src/app/models/OpcaoPropriedadeSku';

@Component({
  selector: 'app-listar-opcoes-caracteristicas',
  templateUrl: './listar-opcoes-caracteristicas.component.html',
  styleUrls: ['./listar-opcoes-caracteristicas.component.scss']
})
export class ListarOpcoesCaracteristicasComponent implements OnInit {
  opcoesCaracteriscicas: any;
  form: FormGroup =  new OpcaoPropriedadeSku().criarFormulario();

  cols: TableCol[] = [{
    name: '#',
    bindValue: 'idOpcaoPropriedadeSKU'
  }, {
    name: 'Nome',
    bindValue: 'nomeOpcao',
    control: this.form.get('nomeOpcao')
  }, {
    name: 'Código',
    bindValue: 'codigoOpcao',
    control: this.form.get('codigoOpcao')
  }];

  constructor(private opcoesService: OpcaoPropriedadeSkuService) { }

  @Input()
  set idCaracteristica(value) {
    if (value) {
      this.buscarOpcoes(value);
    }
  }

  ngOnInit(): void {
  }

  buscarOpcoes(idCaracterisca) {
    this.opcoesService.getOpcoesByPropriedade(idCaracterisca).subscribe(r => {
      console.log(r);
      this.opcoesCaracteriscicas = r;
    });
  }

}
