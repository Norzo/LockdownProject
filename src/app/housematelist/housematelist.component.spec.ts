import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousematelistComponent } from './housematelist.component';

describe('HousematelistComponent', () => {
  let component: HousematelistComponent;
  let fixture: ComponentFixture<HousematelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousematelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousematelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
