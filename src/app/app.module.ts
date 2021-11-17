import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shered/navbar/navbar.component';
import { PartNavComponent } from './shered/part-nav/part-nav.component';
import { HomeComponent } from './component/home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FooterComponent } from './component/footer/footer.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { CategoryComponent } from './component/category/category.component';
import { ShopComponent } from './component/shop/shop.component';
import { ProductComponent } from './component/product/product.component';
import { SubCategoryComponent } from './component/sub-category/sub-category.component';
import { DetailsComponent } from './shered/details/details.component';
import { LoadingComponent } from './shered/loading/loading.component';
import { AllProductComponent } from './component/all-product/all-product.component';
import { AllCatagroryComponent } from './component/all-catagrory/all-catagrory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PartNavComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    CategoryComponent,
    ShopComponent,
    ProductComponent,
    SubCategoryComponent,
    DetailsComponent,
    LoadingComponent,
    AllProductComponent,
    AllCatagroryComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
