import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPosibleColegaComponent } from './info-posible-colega.component';

describe('InfoPosibleColegaComponent', () => {
  let component: InfoPosibleColegaComponent;
  let fixture: ComponentFixture<InfoPosibleColegaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPosibleColegaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPosibleColegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
