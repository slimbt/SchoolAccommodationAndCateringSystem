import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesucceComponent } from './pagesucce.component';

describe('PagesucceComponent', () => {
  let component: PagesucceComponent;
  let fixture: ComponentFixture<PagesucceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesucceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesucceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
