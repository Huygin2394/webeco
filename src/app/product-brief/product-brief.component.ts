import { Component, OnInit, Input } from '@angular/core';
import { PRODUCTS } from '../data_product';

@Component({
  selector: 'app-product-brief',
  templateUrl: './product-brief.component.html',
  styleUrls: ['./product-brief.component.scss']
})
export class ProductBriefComponent implements OnInit {
	
	@Input() dataApp: Number = 0;
	products = PRODUCTS

  constructor() { }

  ngOnInit(): void {
  }

  counter(i: Number) {
    return new Array(i);
	}

}
