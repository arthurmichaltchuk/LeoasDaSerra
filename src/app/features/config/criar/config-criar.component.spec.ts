import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigCriarComponent } from './config-criar.component';

describe('ConfigCriarComponent', () => {
  let component: ConfigCriarComponent;
  let fixture: ComponentFixture<ConfigCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigCriarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
