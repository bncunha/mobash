import { Component, OnInit } from '@angular/core';
import { PropriedadeSkuService } from 'src/app/services/propriedade-sku.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-propriedades-sku',
  templateUrl: './lista-propriedades-sku.component.html',
  styleUrls: ['./lista-propriedades-sku.component.scss']
})
export class ListaPropriedadesSkuComponent implements OnInit {
  propriedadesSku: any[];
  page: number;
  total: number;

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
