import { Component, OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { PRODUCTS } from '../data_product';
import { Product } from '../product';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  id: string;
  product_detail: Product;
  products = PRODUCTS;

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.product_detail = this.products[Number(this.id)-1]
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  title = 'shop-detail-page';
  public numproduct: Number = 5;
  public products_linename: String = 'Products';
  public otherProducts: String = 'Other Products';
  public moreProducts: String = 'Xem thêm';

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
