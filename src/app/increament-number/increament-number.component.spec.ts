import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreamentNumberComponent } from './increament-number.component';

describe('IncreamentNumberComponent', () => {
  let component: IncreamentNumberComponent;
  let fixture: ComponentFixture<IncreamentNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncreamentNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreamentNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
