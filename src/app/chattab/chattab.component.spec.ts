import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChattabComponent } from './chattab.component';

describe('ChattabComponent', () => {
  let component: ChattabComponent;
  let fixture: ComponentFixture<ChattabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChattabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChattabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
