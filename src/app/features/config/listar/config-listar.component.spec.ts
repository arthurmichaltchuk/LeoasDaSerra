import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigListarComponent } from './config-listar.component';

describe('ConfigListarComponent', () => {
  let component: ConfigListarComponent;
  let fixture: ComponentFixture<ConfigListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
