import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyBasketComponent } from './candy-basket.component';

describe('CandyBasketComponent', () => {
  let component: CandyBasketComponent;
  let fixture: ComponentFixture<CandyBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandyBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandyBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
