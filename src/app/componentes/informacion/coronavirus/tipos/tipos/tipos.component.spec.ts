import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TiposComponent } from './tipos.component';

describe('TiposComponent', () => {
  let component: TiposComponent;
  let fixture: ComponentFixture<TiposComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
