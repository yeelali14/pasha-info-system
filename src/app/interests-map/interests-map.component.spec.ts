import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestsMapComponent } from './interests-map.component';

describe('InterestsMapComponent', () => {
  let component: InterestsMapComponent;
  let fixture: ComponentFixture<InterestsMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterestsMapComponent]
    });
    fixture = TestBed.createComponent(InterestsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
