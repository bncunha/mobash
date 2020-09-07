import { PersistenceModel } from './PersistenceModel.interface';
import { FormBuilder, Validators } from '@angular/forms';

export class OpcaoPropriedadeSku extends PersistenceModel<OpcaoPropriedadeSku> {
  private codigoOpcao: string;
  private nomeOpcao: string;
  idOpcaoPropriedadeSKU: number;
  idPropriedadeSKU: number;

  constructor() {
    super();
  }

  criarFormulario(model?: OpcaoPropriedadeSku) {
    this.form = new FormBuilder().group({
      nomeOpcao: [model && model.nomeOpcao, [Validators.required]],
      codigoOpcao: [model && model.codigoOpcao, [Validators.minLength(2), Validators.maxLength(5)]],
      idPropriedadeSKU: [model && model.idPropriedadeSKU, Validators.required]
    });
    return this.form;
  }
}
