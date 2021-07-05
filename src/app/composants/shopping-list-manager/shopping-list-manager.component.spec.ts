import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListManagerComponent } from './shopping-list-manager.component';

describe('ShoppingListManagerComponent', () => {
  let component: ShoppingListManagerComponent;
  let fixture: ComponentFixture<ShoppingListManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
