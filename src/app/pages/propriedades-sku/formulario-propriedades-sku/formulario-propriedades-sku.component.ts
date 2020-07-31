import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PropriedadeSku } from 'src/app/models/PropriedadeSku';
import { PropriedadeSkuService } from 'src/app/services/propriedade-sku.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formulario-propriedades-sku',
  templateUrl: './formulario-propriedades-sku.component.html',
  styleUrls: ['./formulario-propriedades-sku.component.scss']
})
export class FormularioPropriedadesSkuComponent implements OnInit {
  form: FormGroup;
  model: PropriedadeSku = new PropriedadeSku();

  constructor(
    private propriedadeSkuService: PropriedadeSkuService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.form = this.model.criarFormulario();
  }

  onSubmit() {
    if (this.form.valid) {
      const propriedaeSku = this.model.valoresFormulario();
      this.propriedadeSkuService.salvarPropriedade(propriedaeSku).subscribe(response => {
        this.location.back();
      }, error => {
        console.log(error);
      });
    } else {
      this.model.atualizarFormulario();
    }
  }

  get loadingSalvar() {
    return this.propriedadeSkuService.loadingSalvarProriedade;
  }

}
