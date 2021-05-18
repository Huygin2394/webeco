import { Component, OnInit, HostListener, Input } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-linename',
  templateUrl: './linename.component.html',
  styleUrls: ['./linename.component.scss'],
})

export class LinenameComponent implements OnInit{


  @Input() dataApp: String = '';
  constructor() {}

  ngOnInit(): void {
    const lineleft = document.getElementsByClassName("lineleft") as HTMLCollectionOf<HTMLElement>;
    const lineright = document.getElementsByClassName("lineright") as HTMLCollectionOf<HTMLElement>;
    const text = document.getElementsByClassName("text") as HTMLCollectionOf<HTMLElement>;
    const container_linename = document.getElementById("container_linename")!;

    container_linename.style.marginTop = "0px";

    text[0].style.marginTop = "140px";
    lineleft[0].style.marginTop = "168px";
    lineright[0].style.marginTop = "168px";
  }

  onResized(event: ResizedEvent) {
    const lineleft = document.getElementsByClassName("lineleft") as HTMLCollectionOf<HTMLElement>;
    const lineright = document.getElementsByClassName("lineright") as HTMLCollectionOf<HTMLElement>;
    const text = document.getElementsByClassName("text") as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < document.getElementsByClassName("lineleft").length; i++) {
      lineleft[i].style.marginLeft = (event.newWidth*0.15).toString();
    	lineleft[i].style.width = ((event.newWidth*0.7 - text[i].offsetWidth)*0.49).toString();
    	lineright[i].style.marginRight = (event.newWidth*0.15).toString();
    	lineright[i].style.width = ((event.newWidth*0.7 - text[i].offsetWidth)*0.49).toString();
    }  
  }
}
