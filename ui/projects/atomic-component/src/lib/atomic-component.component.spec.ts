import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicComponentComponent } from './atomic-component.component';

describe('AtomicComponentComponent', () => {
  let component: AtomicComponentComponent;
  let fixture: ComponentFixture<AtomicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomicComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
