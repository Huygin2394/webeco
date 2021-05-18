import { Component, OnInit, Input } from '@angular/core';
import { STORIES } from '../data';

@Component({
  selector: 'app-stories-display',
  templateUrl: './stories-display.component.html',
  styleUrls: ['./stories-display.component.scss']
})
export class StoriesDisplayComponent {
	
	@Input() dataApp: Number = 0;

  stories = STORIES

  public seestory: String = 'See More';

	ngOnInit(): void {

	}
}
