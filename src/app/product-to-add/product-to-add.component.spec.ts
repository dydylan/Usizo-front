import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductToAddComponent } from './product-to-add.component';

describe('ProductToAddComponent', () => {
  let component: ProductToAddComponent;
  let fixture: ComponentFixture<ProductToAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductToAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductToAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
