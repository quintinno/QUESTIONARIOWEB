import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdministradorModuleComponent } from './home-administrador-module.component';

describe('HomeAdministradorModuleComponent', () => {
  let component: HomeAdministradorModuleComponent;
  let fixture: ComponentFixture<HomeAdministradorModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAdministradorModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdministradorModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
