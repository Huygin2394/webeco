import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { LinenameComponent } from './linename/linename.component';

import { AngularResizedEventModule } from 'angular-resize-event';
import { ContactComponent } from './contact/contact.component';
import { HomepageProductsComponent } from './homepage-products/homepage-products.component';
import { ProductBriefComponent } from './product-brief/product-brief.component';
import { StoriesDisplayComponent } from './stories-display/stories-display.component';
import { Button1Component } from './button1/button1.component';
import { StoryListPageComponent } from './story-list-page/story-list-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShopComponent } from './shop/shop.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { CollectionListPageComponent } from './collection-list-page/collection-list-page.component';
import { CollectionsDisplayComponent } from './collections-display/collections-display.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    LinenameComponent,
    ContactComponent,
    HomepageProductsComponent,
    ProductBriefComponent,
    StoriesDisplayComponent,
    Button1Component,
    StoryListPageComponent,
    HomepageComponent,
    ShopComponent,
    StoryDetailComponent,
    CollectionListPageComponent,
    CollectionsDisplayComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularResizedEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
