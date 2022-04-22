import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigViewModelsComponent } from './config-view-models.component';

describe('ConfigViewModelsComponent', () => {
  let component: ConfigViewModelsComponent;
  let fixture: ComponentFixture<ConfigViewModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigViewModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigViewModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
