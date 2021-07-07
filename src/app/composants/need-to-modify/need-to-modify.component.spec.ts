import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedToModifyComponent } from './need-to-modify.component';

describe('NeedToModifyComponent', () => {
  let component: NeedToModifyComponent;
  let fixture: ComponentFixture<NeedToModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedToModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedToModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
