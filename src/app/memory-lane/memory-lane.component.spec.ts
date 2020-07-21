import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryLaneComponent } from './memory-lane.component';

describe('MemoryLaneComponent', () => {
  let component: MemoryLaneComponent;
  let fixture: ComponentFixture<MemoryLaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryLaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryLaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
