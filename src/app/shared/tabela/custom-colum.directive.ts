import { Directive, Input, OnInit, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCustomColum]'
})
export class CustomColumDirective implements OnInit {
  @Input() appCustomColum: string;
  template: TemplateRef<any>;

  constructor(template: TemplateRef<any>) {
    this.template = template;
  }

  ngOnInit() {
    console.log('lkdlkdsa', this.appCustomColum);
  }

}
