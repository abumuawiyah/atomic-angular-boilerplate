import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevronDownIconComponent } from './chevron-down-icon.component';

describe('ChevronDownIconComponent', () => {
  let component: ChevronDownIconComponent;
  let fixture: ComponentFixture<ChevronDownIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChevronDownIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChevronDownIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
