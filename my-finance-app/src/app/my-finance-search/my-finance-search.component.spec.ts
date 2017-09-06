import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFinanceSearchComponent } from './my-finance-search.component';

describe('MyFinanceSearchComponent', () => {
  let component: MyFinanceSearchComponent;
  let fixture: ComponentFixture<MyFinanceSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFinanceSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFinanceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
