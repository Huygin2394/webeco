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

    (<HTMLImageElement>document.getElementById("photo1")).src = this.product_detail.photo[0];
    (<HTMLImageElement>document.getElementById("photo2")).src = this.product_detail.photo[1];
    (<HTMLImageElement>document.getElementById("photo3")).src = this.product_detail.photo[2];
    (<HTMLImageElement>document.getElementById("photo4")).src = this.product_detail.photo[3];
    (<HTMLImageElement>document.getElementById("photo5")).src = this.product_detail.photo[0];
    (<HTMLImageElement>document.getElementById("photo6")).src = this.product_detail.photo[1];
    (<HTMLImageElement>document.getElementById("photo7")).src = this.product_detail.photo[2];
    (<HTMLImageElement>document.getElementById("photo8")).src = this.product_detail.photo[3];

    this.showSlides(this.slideIndex);
  }

  navigateToShop(){
    this.router.navigate(['/shop'])
  }

  navigateToContact(){
    this.router.navigate(['/'], { fragment: 'contact' })
  }

  title = 'shop-detail-page';
  public numproduct: Number = 5;
  public products_linename: String = 'Products';
  public otherProducts: String = 'Other Products';
  public moreProducts: String = 'Xem thêm';
  public buyProduct: String = 'Mua sản phẩm';

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

  public slideIndex: number = 1;
  

  plusSlides(n : any) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n : any) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n : number) {
    var i;
    var slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";
    dots[this.slideIndex-1].className += " active";
  }

}
