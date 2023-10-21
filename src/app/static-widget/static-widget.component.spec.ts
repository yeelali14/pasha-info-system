import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticWidgetComponent } from './static-widget.component';

describe('StaticWidgetComponent', () => {
  let component: StaticWidgetComponent;
  let fixture: ComponentFixture<StaticWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaticWidgetComponent]
    });
    fixture = TestBed.createComponent(StaticWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
