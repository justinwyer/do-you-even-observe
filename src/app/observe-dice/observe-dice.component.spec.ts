import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserveDiceComponent } from './observe-dice.component';

describe('ObserveDiceComponent', () => {
  let component: ObserveDiceComponent;
  let fixture: ComponentFixture<ObserveDiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserveDiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserveDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
