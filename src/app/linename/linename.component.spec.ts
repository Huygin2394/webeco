import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinenameComponent } from './linename.component';

describe('LinenameComponent', () => {
  let component: LinenameComponent;
  let fixture: ComponentFixture<LinenameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinenameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
