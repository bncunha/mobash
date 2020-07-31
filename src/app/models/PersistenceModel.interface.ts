import { FormGroup } from '@angular/forms';

export abstract class PersistenceModel<Model> {
  form: FormGroup;
  abstract criarFormulario(model?: Model): FormGroup;

  valoresFormulario(): Model {
    if (this.form) {
      const obj = Object.assign({} as Model, this.form.value);
      delete obj.form;
      return obj;
    } else {
      return null;
    }
  }

  atualizarFormulario() {
    if (this.form) {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
    }
    console.log(this.form);
  }

}
