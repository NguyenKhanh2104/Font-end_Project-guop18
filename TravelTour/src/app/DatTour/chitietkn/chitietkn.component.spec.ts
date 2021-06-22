import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietknComponent } from './chitietkn.component';

describe('ChitietknComponent', () => {
  let component: ChitietknComponent;
  let fixture: ComponentFixture<ChitietknComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChitietknComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietknComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
