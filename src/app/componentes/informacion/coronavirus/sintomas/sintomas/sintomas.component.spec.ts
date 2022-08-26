import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SintomasComponent } from './sintomas.component';

describe('SintomasComponent', () => {
  let component: SintomasComponent;
  let fixture: ComponentFixture<SintomasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SintomasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SintomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
