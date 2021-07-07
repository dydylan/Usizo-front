import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedToCheckComponent } from './need-to-check.component';

describe('NeedToCheckComponent', () => {
  let component: NeedToCheckComponent;
  let fixture: ComponentFixture<NeedToCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedToCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedToCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
