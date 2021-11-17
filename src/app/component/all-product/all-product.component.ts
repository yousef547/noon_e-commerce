import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/ViewModel/product';
import { SubCategory } from 'src/app/ViewModel/sub-category';
import { GetApiService } from 'src/get-api.service';
declare var $: any;
@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        right: "0"

      })),
      state('closed', style({
        right: "100%"
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class AllProductComponent implements OnInit {
  prods: Product[] | any;
  search: string = '';
  products: Product | any;
  shopId1: number | any;
  isOpen = true;
  subCategory: SubCategory[] | any;
  subCategories: SubCategory | any;
  poducts: Product | any;
  product: any[] = [];
  allCount: number[];
  pr: any;
  inputs = document.getElementsByClassName('puts');


  constructor(private _activeRouter: ActivatedRoute, private _GetApiService: GetApiService) {
    this.subCategory = [];
    this.prods = [];
    this.allCount = [];
    this.pr = this.prods;

  }

  getApiProduct(prod2: number) {
    this._GetApiService.getCategories("products").subscribe((res) => {
      this.products = res.Products;
      for (var i = 0; i < this.products.length; i++) {
        if (prod2 == this.products[i].main_category_id) {
          this.prods.push(this.products[i])
        }
      }
      // this.spiner = false
    });
  }

  openFilter() {
    this.isOpen = !this.isOpen;
    this.getCount();

  }
  getCount() {
    console.log(this.pr)
    // console.log(this.prods)
    this.allCount = [];
    for (let i = 0; i < this.subCategory.length; i++) {
      var count = 0;
      for (let y = 0; y < this.pr.length; y++) {
        if (this.subCategory[i].id == this.pr[y].sub_category_id) {
          count++;
        }
      }
      this.allCount.push(count);
    }
    console.log(this.allCount)
  }
  getProducts(id: number) {
    console.log(id);// error
    for (let i = 0; i < this.inputs.length; i++) {
      if (this.subCategory[i].id == id) {
        if ($(this.inputs[i]).prop('checked') == true) {
          for (let x = 0; x < this.poducts.length; x++) {
            if (id == this.poducts[x].sub_category_id) {
              this.product.unshift(this.poducts[x])
            }
          }
          this.prods = 0;
          this.prods = this.product;
          $("html, body").animate({ scrollTop: 0 });
        } else {
          var flit = this.product.filter(prod => prod.sub_category_id != id)
          this.product = flit;
          this.prods = 0;
          this.prods = this.product;
        }
      }
    }
  }

  ngOnInit(): void {
    this._activeRouter.paramMap.subscribe(param1 => {
      this.shopId1 = Number(param1.get('idShop'));
      this.getApiProduct(this.shopId1)
    });
    this._GetApiService.getCategories('products').subscribe((res) => {
      this.poducts = res.Products;
    })
    this._GetApiService.getCategories("subCategories").subscribe((res) => {
      this.subCategories = res['Sub Categories'];
      for (let i = 0; i < this.subCategories.length; i++) {
        if (this.subCategories[i].main_category_id == this.shopId1) {
          this.subCategory.push(this.subCategories[i])
        }
      }
    });
  }

}
