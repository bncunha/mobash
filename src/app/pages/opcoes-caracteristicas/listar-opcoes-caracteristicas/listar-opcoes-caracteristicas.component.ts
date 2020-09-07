import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TableCol, TabelaComponent } from 'src/app/shared/tabela/tabela.component';
import { OpcaoPropriedadeSkuService } from 'src/app/services/opcao-propriedade-sku.service';
import { FormGroup } from '@angular/forms';
import { OpcaoPropriedadeSku } from 'src/app/models/OpcaoPropriedadeSku';
import { AlertPopupService } from 'src/app/shared/alert-popup/alert-popup.service';

@Component({
  selector: 'app-listar-opcoes-caracteristicas',
  templateUrl: './listar-opcoes-caracteristicas.component.html',
  styleUrls: ['./listar-opcoes-caracteristicas.component.scss']
})
export class ListarOpcoesCaracteristicasComponent implements OnInit {
  @ViewChild(TabelaComponent) tabela: TabelaComponent;

  opcoesCaracteriscicas: any;
  idPropriedade: number;
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

  constructor(
    private opcoesService: OpcaoPropriedadeSkuService,
    private alert: AlertPopupService
    ) { }

  @Input()
  set idCaracteristica(value) {
    this.idPropriedade = value;
    if (value) {
      this.form.get('idPropriedadeSKU').patchValue(value);
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

  salvar(idOpcao?: number) {
    const request = idOpcao ? this.opcoesService.editar : this.opcoesService.novoOpcao;
    if (this.form.valid) {
      const opcao = new OpcaoPropriedadeSku().valoresFormulario(this.form);
      opcao.idOpcaoPropriedadeSKU = idOpcao;
      request.bind(this.opcoesService)(opcao).subscribe(r => {
        this.buscarOpcoes(this.idPropriedade);
        this.tabela.cancelar();
      });
    } else {
      this.alert.showError('Formulário inválido!');
    }
  }

  deletar(id: number) {
    this.opcoesService.deletar(id, () => {
      this.buscarOpcoes(this.idPropriedade);
    });
  }

}
