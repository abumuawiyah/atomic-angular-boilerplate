import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingIconComponent } from './setting-icon.component';

describe('SettingIconComponent', () => {
  let component: SettingIconComponent;
  let fixture: ComponentFixture<SettingIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
