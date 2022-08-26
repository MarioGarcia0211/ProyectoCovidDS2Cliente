import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TablamunicipalComponent } from './tablamunicipal.component';

describe('TablamunicipalComponent', () => {
  let component: TablamunicipalComponent;
  let fixture: ComponentFixture<TablamunicipalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablamunicipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablamunicipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
