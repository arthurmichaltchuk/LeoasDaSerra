import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadaListarComponent } from './chamada-listar.component';

describe('ChamadaListarComponent', () => {
  let component: ChamadaListarComponent;
  let fixture: ComponentFixture<ChamadaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamadaListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
