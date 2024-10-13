import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaginationRestauComponent } from './table-pagination-restau.component';

describe('TablePaginationRestauComponent', () => {
  let component: TablePaginationRestauComponent;
  let fixture: ComponentFixture<TablePaginationRestauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePaginationRestauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePaginationRestauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
