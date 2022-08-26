import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TabladptoComponent } from './tabladpto.component';

describe('TabladptoComponent', () => {
  let component: TabladptoComponent;
  let fixture: ComponentFixture<TabladptoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabladptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabladptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
