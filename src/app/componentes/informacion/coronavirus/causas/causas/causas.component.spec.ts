import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CausasComponent } from './causas.component';

describe('CausasComponent', () => {
  let component: CausasComponent;
  let fixture: ComponentFixture<CausasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CausasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CausasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
