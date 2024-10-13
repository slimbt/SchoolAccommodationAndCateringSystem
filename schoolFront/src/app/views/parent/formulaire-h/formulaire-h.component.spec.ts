import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireHComponent } from './formulaire-h.component';

describe('FormulaireHComponent', () => {
  let component: FormulaireHComponent;
  let fixture: ComponentFixture<FormulaireHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
