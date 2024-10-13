import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbComponent } from './feedb.component';

describe('FeedbComponent', () => {
  let component: FeedbComponent;
  let fixture: ComponentFixture<FeedbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
