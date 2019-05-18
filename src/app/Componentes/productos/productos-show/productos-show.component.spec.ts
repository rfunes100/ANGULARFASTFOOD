import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosShowComponent } from './productos-show.component';

describe('ProductosShowComponent', () => {
  let component: ProductosShowComponent;
  let fixture: ComponentFixture<ProductosShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
