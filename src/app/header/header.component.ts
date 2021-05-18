import { Component, OnInit, HostListener } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

	intialY : number;
  constructor(private router: Router) {
  	this.intialY = 0;

  	this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
      	document.getElementById("container")!.style.visibility ="visible";
      }
      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    });
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
	onScroll(event:any) {
		if(window.pageYOffset < 10){
			document.getElementById("container")!.style.opacity= "1";
		}else if(((window.pageYOffset - this.intialY) > 0)&&(window.pageYOffset > 141)){
			document.getElementById("container")!.style.visibility ="hidden";
		}else if((window.pageYOffset - this.intialY) < -5){
			document.getElementById("container")!.style.visibility ="visible";
			document.getElementById("container")!.style.opacity= "0.8";
		}else if(window.pageYOffset < 141){
			document.getElementById("container")!.style.visibility ="visible";
			document.getElementById("container")!.style.opacity= "0.8";
		}
		this.intialY = window.pageYOffset;
  }
}

