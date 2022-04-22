import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadaEditarComponent } from './chamada-editar.component';

describe('ChamadaEditarComponent', () => {
  let component: ChamadaEditarComponent;
  let fixture: ComponentFixture<ChamadaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamadaEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
