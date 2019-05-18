import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasShowComponent } from './categorias-show.component';

describe('CategoriasShowComponent', () => {
  let component: CategoriasShowComponent;
  let fixture: ComponentFixture<CategoriasShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
