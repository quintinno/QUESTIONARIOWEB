import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeModuleComponent } from './welcome-module.component';

describe('WelcomeModuleComponent', () => {
  let component: WelcomeModuleComponent;
  let fixture: ComponentFixture<WelcomeModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
