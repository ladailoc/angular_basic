import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockHomeComponent } from './stock-home.component';

describe('StockHomeComponent', () => {
  let component: StockHomeComponent;
  let fixture: ComponentFixture<StockHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
