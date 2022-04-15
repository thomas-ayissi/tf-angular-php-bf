import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo7detailsComponent } from './demo7details.component';

describe('Demo7detailsComponent', () => {
  let component: Demo7detailsComponent;
  let fixture: ComponentFixture<Demo7detailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo7detailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo7detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
