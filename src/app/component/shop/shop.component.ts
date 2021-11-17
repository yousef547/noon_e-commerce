import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/ViewModel/categorie';
import { Product } from 'src/app/ViewModel/product';
import { GetApiService } from 'src/get-api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  toProduct:any;
  constructor() {
   
  }
  reseveData(data:any){
    this.toProduct=data;
    // console.log(this.toProduct)
  }
  ngOnInit(): void {
  }
}
