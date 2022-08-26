import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GraficadptoComponent } from './graficadpto.component';

describe('GraficadptoComponent', () => {
  let component: GraficadptoComponent;
  let fixture: ComponentFixture<GraficadptoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficadptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficadptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
