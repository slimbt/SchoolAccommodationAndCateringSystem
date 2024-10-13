import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EparentComponent } from './eparent.component';

describe('EparentComponent', () => {
  let component: EparentComponent;
  let fixture: ComponentFixture<EparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
