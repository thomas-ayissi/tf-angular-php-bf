import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo7addComponent } from './demo7add.component';

describe('Demo7addComponent', () => {
  let component: Demo7addComponent;
  let fixture: ComponentFixture<Demo7addComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo7addComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo7addComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
