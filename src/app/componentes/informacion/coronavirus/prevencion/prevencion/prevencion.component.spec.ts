import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrevencionComponent } from './prevencion.component';

describe('PrevencionComponent', () => {
  let component: PrevencionComponent;
  let fixture: ComponentFixture<PrevencionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevencionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
