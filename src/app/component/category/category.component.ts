import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Icategory } from 'src/app/interface/icategory';
import { Saller } from 'src/app/ViewModel/saller';
import { GetApiService } from 'src/get-api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  productA:Saller | any;
  product:any;
  spiner:boolean;
  constructor(private _activeRouter:ActivatedRoute,private _GetApiService:GetApiService) { 
    this.spiner=true
  }

  ngOnInit(): void {
    this.product=this._activeRouter.snapshot.params['id'];
    // console.log(product);
    this._GetApiService.getCategories("sellers").subscribe((res) => {
      this.productA= res.Sellers;
      this.spiner=false
    });
    
  }

}


