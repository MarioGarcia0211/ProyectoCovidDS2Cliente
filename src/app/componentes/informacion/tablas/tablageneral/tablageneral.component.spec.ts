import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TablageneralComponent } from './tablageneral.component';

describe('TablageneralComponent', () => {
  let component: TablageneralComponent;
  let fixture: ComponentFixture<TablageneralComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablageneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablageneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
