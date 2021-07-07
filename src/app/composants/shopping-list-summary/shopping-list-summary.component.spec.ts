import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListSummaryComponent } from './shopping-list-summary.component';

describe('ShoppingListSummaryComponent', () => {
  let component: ShoppingListSummaryComponent;
  let fixture: ComponentFixture<ShoppingListSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
