import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AafFundListComponent } from './aaf-fund-list.component';

describe('AafFundListComponent', () => {
  let component: AafFundListComponent;
  let fixture: ComponentFixture<AafFundListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AafFundListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AafFundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
