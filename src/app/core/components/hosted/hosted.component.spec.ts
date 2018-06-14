import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostedComponent } from './hosted.component';

describe('HostedComponent', () => {
  let component: HostedComponent;
  let fixture: ComponentFixture<HostedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
