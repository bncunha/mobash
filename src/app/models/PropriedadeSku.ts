import { PersistenceModel } from './PersistenceModel.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class PropriedadeSku extends PersistenceModel<PropriedadeSku> {
  private nomePropriedade: string;
  private codigoPropriedade: string;
  idPropriedadeSku: number;

  constructor() {
    super();
  }

  criarFormulario(model?: PropriedadeSku) {
    this.form = new FormBuilder().group({
      nomePropriedade: [model && model.nomePropriedade, [Validators.required]],
      codigoPropriedade: [model && model.codigoPropriedade, [Validators.minLength(2), Validators.maxLength(5)]],
    });
    return this.form;
  }
}
