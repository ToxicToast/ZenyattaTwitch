import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTitleGameComponent } from './change-title-game.component';

describe('ChangeTitleGameComponent', () => {
  let component: ChangeTitleGameComponent;
  let fixture: ComponentFixture<ChangeTitleGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeTitleGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTitleGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
