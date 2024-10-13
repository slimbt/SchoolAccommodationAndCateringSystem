import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Confirmform1Component } from './confirmform1.component';

describe('Confirmform1Component', () => {
  let component: Confirmform1Component;
  let fixture: ComponentFixture<Confirmform1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Confirmform1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Confirmform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
