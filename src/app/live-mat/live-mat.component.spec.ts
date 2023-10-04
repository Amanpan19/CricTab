import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveMatComponent } from './live-mat.component';

describe('LiveMatComponent', () => {
  let component: LiveMatComponent;
  let fixture: ComponentFixture<LiveMatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveMatComponent]
    });
    fixture = TestBed.createComponent(LiveMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
