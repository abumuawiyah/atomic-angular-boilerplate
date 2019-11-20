import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildIconComponent } from './build-icon.component';

describe('BuildIconComponent', () => {
  let component: BuildIconComponent;
  let fixture: ComponentFixture<BuildIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
