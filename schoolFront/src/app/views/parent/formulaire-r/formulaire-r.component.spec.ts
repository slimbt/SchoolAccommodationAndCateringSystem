import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireRComponent } from './formulaire-r.component';

describe('FormulaireRComponent', () => {
  let component: FormulaireRComponent;
  let fixture: ComponentFixture<FormulaireRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
