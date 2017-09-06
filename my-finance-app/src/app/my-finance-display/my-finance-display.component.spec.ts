import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFinanceDisplayComponent } from './my-finance-display.component';

describe('MyFinanceDisplayComponent', () => {
  let component: MyFinanceDisplayComponent;
  let fixture: ComponentFixture<MyFinanceDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFinanceDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFinanceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
