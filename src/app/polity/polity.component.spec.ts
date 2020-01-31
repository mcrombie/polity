import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolityComponent } from './polity.component';

describe('PolityComponent', () => {
  let component: PolityComponent;
  let fixture: ComponentFixture<PolityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
