import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AportesComponent } from './aportes.component';

describe('AportesComponent', () => {
  let component: AportesComponent;
  let fixture: ComponentFixture<AportesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
