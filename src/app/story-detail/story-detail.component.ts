import { Component, OnInit } from '@angular/core';
import { STORIES } from '../data';
import { Story } from '../story';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.scss']
})
export class StoryDetailComponent implements OnInit {
	
	id: string;
	story_detail: Story;
	stories = STORIES;

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
  	this.id = this.route.snapshot.paramMap.get('id')
  	this.story_detail = this.stories[Number(this.id)-1]
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  title = 'story-detail-page';
  public story: String = 'Story';
}
