import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndAddComponent } from './search-and-add.component';

describe('SearchAndAddComponent', () => {
  let component: SearchAndAddComponent;
  let fixture: ComponentFixture<SearchAndAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAndAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAndAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
