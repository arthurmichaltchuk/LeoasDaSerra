import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadaCriarComponent } from './chamada-criar.component';

describe('ChamadaCriarComponent', () => {
  let component: ChamadaCriarComponent;
  let fixture: ComponentFixture<ChamadaCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamadaCriarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadaCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
