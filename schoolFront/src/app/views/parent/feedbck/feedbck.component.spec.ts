import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbckComponent } from './feedbck.component';

describe('FeedbckComponent', () => {
  let component: FeedbckComponent;
  let fixture: ComponentFixture<FeedbckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
