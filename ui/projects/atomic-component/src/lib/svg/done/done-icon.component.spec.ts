import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneIconComponent } from './done-icon.component';

describe('DoneIconComponent', () => {
  let component: DoneIconComponent;
  let fixture: ComponentFixture<DoneIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
