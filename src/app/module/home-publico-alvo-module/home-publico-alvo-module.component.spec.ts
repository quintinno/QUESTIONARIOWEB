import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePublicoAlvoModuleComponent } from './home-publico-alvo-module.component';

describe('HomePublicoAlvoModuleComponent', () => {
  let component: HomePublicoAlvoModuleComponent;
  let fixture: ComponentFixture<HomePublicoAlvoModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePublicoAlvoModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePublicoAlvoModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
