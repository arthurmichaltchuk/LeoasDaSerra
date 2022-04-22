import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadaServicesComponent } from './chamada-services.component';

describe('ChamadaServicesComponent', () => {
  let component: ChamadaServicesComponent;
  let fixture: ComponentFixture<ChamadaServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamadaServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadaServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
