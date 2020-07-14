import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PropriedadeSku } from 'src/app/models/PropriedadeSku';
import { PropriedadeSkuService } from 'src/app/services/propriedade-sku.service';

@Component({
  selector: 'app-formulario-propriedades-sku',
  templateUrl: './formulario-propriedades-sku.component.html',
  styleUrls: ['./formulario-propriedades-sku.component.scss']
})
export class FormularioPropriedadesSkuComponent implements OnInit {
  form: FormGroup;
  model: PropriedadeSku = new PropriedadeSku();

  constructor(
    private propriedadeSkuService: PropriedadeSkuService
  ) { }

  ngOnInit(): void {
    this.form = this.model.criarFormulario();
  }

  onSubmit() {
    if (this.form.valid) {
      const propriedaeSku = this.model.valoresFormulario();
      this.propriedadeSkuService.salvarPropriedade(propriedaeSku).subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
    } else {
      console.log(this.form);
    }
  }

}
