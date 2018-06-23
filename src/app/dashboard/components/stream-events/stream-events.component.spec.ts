import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamEventsComponent } from './stream-events.component';

describe('StreamEventsComponent', () => {
  let component: StreamEventsComponent;
  let fixture: ComponentFixture<StreamEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
