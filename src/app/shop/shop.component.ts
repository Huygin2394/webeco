import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../data_product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public numproduct: Number = PRODUCTS.length;

  public shop: String = 'Shop';
}
