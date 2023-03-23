import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalledModalComponent } from './called-modal.component';

describe('CalledModalComponent', () => {
  let component: CalledModalComponent;
  let fixture: ComponentFixture<CalledModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalledModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalledModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
