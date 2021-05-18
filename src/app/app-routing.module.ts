import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryListPageComponent } from './story-list-page/story-list-page.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
	{ path: '', component: HomepageComponent },
	{ path: 'story', component: StoryListPageComponent },
	{ path: 'shop', component: ShopComponent },
	{ path: 'story/:id', component: StoryDetailComponent},
	{ path: 'product/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
