import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachTourComponent } from './danh-sach-tour.component';

describe('DanhSachTourComponent', () => {
  let component: DanhSachTourComponent;
  let fixture: ComponentFixture<DanhSachTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhSachTourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
