import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachTinTucComponent } from './danh-sach-tin-tuc.component';

describe('DanhSachTinTucComponent', () => {
  let component: DanhSachTinTucComponent;
  let fixture: ComponentFixture<DanhSachTinTucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhSachTinTucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachTinTucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
