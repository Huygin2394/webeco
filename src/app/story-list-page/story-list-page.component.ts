import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-list-page',
  templateUrl: './story-list-page.component.html',
  styleUrls: ['./story-list-page.component.scss']
})
export class StoryListPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'story-page';
  public story: String = 'Story';
  public 5: Number = 5;
}
