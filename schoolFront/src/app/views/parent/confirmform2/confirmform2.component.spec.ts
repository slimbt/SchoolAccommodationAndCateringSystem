import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Confirmform2Component } from './confirmform2.component';

describe('Confirmform2Component', () => {
  let component: Confirmform2Component;
  let fixture: ComponentFixture<Confirmform2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Confirmform2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Confirmform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
