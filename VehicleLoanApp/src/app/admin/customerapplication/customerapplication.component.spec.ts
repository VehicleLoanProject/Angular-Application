import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerapplicationComponent } from './customerapplication.component';

describe('CustomerapplicationComponent', () => {
  let component: CustomerapplicationComponent;
  let fixture: ComponentFixture<CustomerapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
