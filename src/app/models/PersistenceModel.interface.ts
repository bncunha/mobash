import { FormGroup } from '@angular/forms';

export abstract class PersistenceModel<Model> {
  form: FormGroup;
  abstract criarFormulario(model?: Model): FormGroup;

  valoresFormulario(form?: FormGroup): Model {
    const f = form || this.form;
    if (f) {
      const obj = Object.assign({} as Model, f.value);
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
