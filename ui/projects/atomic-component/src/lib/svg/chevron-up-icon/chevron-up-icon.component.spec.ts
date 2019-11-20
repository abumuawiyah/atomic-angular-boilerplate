import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevronUpIconComponent } from './chevron-up-icon.component';

describe('ChevronUpIconComponent', () => {
  let component: ChevronUpIconComponent;
  let fixture: ComponentFixture<ChevronUpIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChevronUpIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChevronUpIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
