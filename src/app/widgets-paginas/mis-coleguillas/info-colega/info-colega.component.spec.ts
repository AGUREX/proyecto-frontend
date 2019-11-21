import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoColegaComponent } from './info-colega.component';

describe('InfoColegaComponent', () => {
  let component: InfoColegaComponent;
  let fixture: ComponentFixture<InfoColegaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoColegaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoColegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
