import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GraficagralComponent } from './graficagral.component';

describe('GraficagralComponent', () => {
  let component: GraficagralComponent;
  let fixture: ComponentFixture<GraficagralComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficagralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficagralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
