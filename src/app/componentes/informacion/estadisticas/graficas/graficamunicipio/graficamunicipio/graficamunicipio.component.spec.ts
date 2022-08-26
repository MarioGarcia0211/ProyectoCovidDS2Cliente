import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GraficamunicipioComponent } from './graficamunicipio.component';

describe('GraficamunicipioComponent', () => {
  let component: GraficamunicipioComponent;
  let fixture: ComponentFixture<GraficamunicipioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficamunicipioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficamunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
