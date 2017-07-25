import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserveTwoComponent } from './observe-two.component';

describe('ObserveTwoComponent', () => {
  let component: ObserveTwoComponent;
  let fixture: ComponentFixture<ObserveTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserveTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserveTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
