import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigServicesComponent } from './config-services.component';

describe('ConfigServicesComponent', () => {
  let component: ConfigServicesComponent;
  let fixture: ComponentFixture<ConfigServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
