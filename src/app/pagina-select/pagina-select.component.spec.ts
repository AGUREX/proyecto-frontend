import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSelectComponent } from './pagina-select.component';

describe('PaginaSelectComponent', () => {
  let component: PaginaSelectComponent;
  let fixture: ComponentFixture<PaginaSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
