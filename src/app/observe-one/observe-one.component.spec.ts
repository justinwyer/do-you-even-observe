import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserveOneComponent } from './observe-one.component';

describe('ObserveOneComponent', () => {
  let component: ObserveOneComponent;
  let fixture: ComponentFixture<ObserveOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserveOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserveOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
