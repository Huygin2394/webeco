import { Component, OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-products',
  templateUrl: './homepage-products.component.html',
  styleUrls: ['./homepage-products.component.scss']
})
export class HomepageProductsComponent implements OnInit {

  constructor(private router: Router) { 
  }

  ngOnInit(): void {}

  navigate(){
    this.router.navigate(['/shop'])
  }

  public seeproduct: String = 'See Products';
  public numproduct: Number = 5;

  onResized(event: ResizedEvent) {
  	const productbrief = document.getElementsByClassName("container_product_brief") as HTMLCollectionOf<HTMLElement>;
		if(event.newWidth > 1428){
			productbrief[4].style.visibility ="visible";
			productbrief[3].style.visibility ="visible";
		}else if(event.newWidth <= 1428 && event.newWidth > 1142){
			productbrief[4].style.visibility ="hidden";
			productbrief[3].style.visibility ="visible";
		}else if(event.newWidth <= 1142){
			productbrief[4].style.visibility ="hidden";
			productbrief[3].style.visibility ="hidden";
		}
  }
}
