import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TratamientosComponent } from './tratamientos.component';

describe('TratamientosComponent', () => {
  let component: TratamientosComponent;
  let fixture: ComponentFixture<TratamientosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TratamientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
