import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Alliance2Component } from './alliance2.component';

describe('Alliance2Component', () => {
  let component: Alliance2Component;
  let fixture: ComponentFixture<Alliance2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alliance2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Alliance2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
