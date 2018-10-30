import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyModalComponent } from './candy-modal.component';

describe('CandyModalComponent', () => {
  let component: CandyModalComponent;
  let fixture: ComponentFixture<CandyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
