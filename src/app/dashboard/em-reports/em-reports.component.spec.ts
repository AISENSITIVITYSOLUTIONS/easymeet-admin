import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmReportsComponent } from './em-reports.component';

describe('EmReportsComponent', () => {
  let component: EmReportsComponent;
  let fixture: ComponentFixture<EmReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
