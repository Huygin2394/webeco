import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageStoriesComponent } from './homepage-stories.component';

describe('HomepageStoriesComponent', () => {
  let component: HomepageStoriesComponent;
  let fixture: ComponentFixture<HomepageStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
