import { Component, OnInit } from '@angular/core';
import { PropriedadeSkuService } from 'src/app/services/propriedade-sku.service';
import { Observable } from 'rxjs';
import { TableCol } from 'src/app/shared/tabela/tabela.component';
import { FormGroup } from '@angular/forms';
import { PropriedadeSku } from 'src/app/models/PropriedadeSku';

@Component({
  selector: 'app-lista-propriedades-sku',
  templateUrl: './lista-propriedades-sku.component.html',
  styleUrls: ['./lista-propriedades-sku.component.scss']
})
export class ListaPropriedadesSkuComponent implements OnInit {
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

  constructor(private propriedadeSkuService: PropriedadeSkuService) { }

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

}
