import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaginationRecComponent } from './table-pagination-rec.component';

describe('TablePaginationRecComponent', () => {
  let component: TablePaginationRecComponent;
  let fixture: ComponentFixture<TablePaginationRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePaginationRecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePaginationRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
