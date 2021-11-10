import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamolaComponent } from './damola.component';

describe('DamolaComponent', () => {
  let component: DamolaComponent;
  let fixture: ComponentFixture<DamolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DamolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
