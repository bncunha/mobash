import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPropriedadesSkuComponent } from './lista-propriedades-sku.component';

describe('ListaPropriedadesSkuComponent', () => {
  let component: ListaPropriedadesSkuComponent;
  let fixture: ComponentFixture<ListaPropriedadesSkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPropriedadesSkuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPropriedadesSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
