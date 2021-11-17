import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/ViewModel/categorie';
import { GetApiService } from 'src/get-api.service';
declare var $:any;
@Component({
  selector: 'app-all-catagrory',
  templateUrl: './all-catagrory.component.html',
  styleUrls: ['./all-catagrory.component.scss']
})
export class AllCatagroryComponent implements OnInit {
  products: Categorie | any;
  shops: any[] = [];
  shopId1:number |any;
  constructor(private _GetApiService:GetApiService,private _activeRouter:ActivatedRoute) { }
  GetApiCateg(prod: number) {
    /*------------------------------------------*/
    this._GetApiService.getCategories("categories").subscribe((res) => {
      this.products = res.Categories;
      this.shops=[];
      for (var i = 0; i < this.products.length; i++) {
        if (prod == this.products[i].main_category_id) {
          this.shops.push(this.products[i])
        }
      }
      // this.spiner = false
    })
    $("html, body").animate({ scrollTop: 0 }, "slow");

  }
  ngOnInit(): void {
    this._activeRouter.paramMap.subscribe(param1 => {
      this.shopId1 = Number(param1.get('idShop'));
      this.GetApiCateg(this.shopId1);
      // this.getApiProduct(this.shopId1)
    });
    
  }

}
