import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/ViewModel/product';
import { GetApiService } from 'src/get-api.service';
declare var $:any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 products:Product|any;
 prods:any[]=[];
 productId:any;
 allProd:number |any;
 spiner:boolean;
/**
 *
 */
constructor(private _activetedRouder:ActivatedRoute, private _GetApiService:GetApiService) {
  this.spiner = true;
}
getAllProd(){
  this._GetApiService.getCategories("products").subscribe((res) => {
    this.products=res.Products;
    this.prods=[];
    for(var i=0;i<this.products.length;i++){
      if(this.allProd == this.products[i].category_id) {
        this.prods.push(this.products[i])
      }
    }
    this.spiner = false
    
  });
}

  ngOnInit(): void {
    $("html, body").animate({ scrollTop: 0 }, "slow");

  this._activetedRouder.paramMap.subscribe(prams => {
      this.allProd = Number(prams.get('idprod'));
      this.getAllProd();
    })
   
    // console.log(this.productId)
 

  }

}
