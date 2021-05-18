import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionListPageComponent } from './collection-list-page.component';

describe('CollectionListPageComponent', () => {
  let component: CollectionListPageComponent;
  let fixture: ComponentFixture<CollectionListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
