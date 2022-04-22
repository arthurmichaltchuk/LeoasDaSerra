import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadaViewModelsComponent } from './chamada-view-models.component';

describe('ChamadaViewModelsComponent', () => {
  let component: ChamadaViewModelsComponent;
  let fixture: ComponentFixture<ChamadaViewModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamadaViewModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadaViewModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
