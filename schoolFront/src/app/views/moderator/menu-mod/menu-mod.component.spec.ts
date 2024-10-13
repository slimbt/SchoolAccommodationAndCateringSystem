import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuModComponent } from './menu-mod.component';

describe('MenuModComponent', () => {
  let component: MenuModComponent;
  let fixture: ComponentFixture<MenuModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
