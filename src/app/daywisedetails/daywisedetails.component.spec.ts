import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaywisedetailsComponent } from './daywisedetails.component';

describe('DaywisedetailsComponent', () => {
  let component: DaywisedetailsComponent;
  let fixture: ComponentFixture<DaywisedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaywisedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaywisedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
