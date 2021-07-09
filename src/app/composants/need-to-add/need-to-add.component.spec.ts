import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedToAddComponent } from './need-to-add.component';

describe('NeedToAddComponent', () => {
  let component: NeedToAddComponent;
  let fixture: ComponentFixture<NeedToAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedToAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedToAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
