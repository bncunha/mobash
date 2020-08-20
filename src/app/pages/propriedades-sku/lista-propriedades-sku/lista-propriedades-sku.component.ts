import { Component, OnInit, ViewChild } from '@angular/core';
import { PropriedadeSkuService } from 'src/app/services/propriedade-sku.service';
import { Observable } from 'rxjs';
import { TableCol, TabelaComponent } from 'src/app/shared/tabela/tabela.component';
import { FormGroup } from '@angular/forms';
import { PropriedadeSku } from 'src/app/models/PropriedadeSku';
import { AlertPopupService } from 'src/app/shared/alert-popup/alert-popup.service';

@Component({
  selector: 'app-lista-propriedades-sku',
  templateUrl: './lista-propriedades-sku.component.html',
  styleUrls: ['./lista-propriedades-sku.component.scss']
})
export class ListaPropriedadesSkuComponent implements OnInit {
  @ViewChild(TabelaComponent) tabela: TabelaComponent;

  propriedadesSku: any[];
  page: number;
  total: number;
  addForm: FormGroup = new PropriedadeSku().criarFormulario();

  cols: TableCol[] = [{
    name: '#',
    bindValue: 'idPropriedadeSKU'
  }, {
    name: 'Nome',
    bindValue: 'nomePropriedade',
    control: this.addForm.get('nomePropriedade')
  }, {
    name: 'Código',
    bindValue: 'codigoPropriedade',
    control: this.addForm.get('codigoPropriedade')
  }];

  constructor(private propriedadeSkuService: PropriedadeSkuService, private alert: AlertPopupService) { }

  ngOnInit(): void {
    this.buscarPropriedadesSku();
  }

  buscarPropriedadesSku() {
    this.propriedadeSkuService.getPropriedades().subscribe(r => {
      console.log(r);
      this.propriedadesSku = r.itens;
      this.page = r.page;
      this.total = r.total;
    });
  }

  salvar(idPropriedadeSKU?: number) {
    const request = idPropriedadeSKU ? this.propriedadeSkuService.editarPropriedade : this.propriedadeSkuService.salvarPropriedade;
    if (this.addForm.valid) {
      const propriedadeSku = new PropriedadeSku().valoresFormulario(this.addForm);
      propriedadeSku.idPropriedadeSku = idPropriedadeSKU;
      request.bind(this.propriedadeSkuService)(propriedadeSku).subscribe(r => {
        this.buscarPropriedadesSku();
        this.tabela.cancelar();
      });
    } else {
      this.alert.showError('Formulário inválido!');
    }
  }

  deletar(id: number) {
    this.propriedadeSkuService.deletar(id, () => {
      this.buscarPropriedadesSku();
    });
  }

}
