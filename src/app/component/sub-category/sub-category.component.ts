import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/ViewModel/product';
import { SubCategory } from 'src/app/ViewModel/sub-category';
import { GetApiService } from 'src/get-api.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {

  subCategories:SubCategory | any;
  subcate:any[]=[];
  subCategoryId:any;
  spiner:boolean;
  constructor(private _activetedRouder:ActivatedRoute, private _GetApiService:GetApiService) { 
    this.spiner = true;
  }

  ngOnInit(): void {
    this.subCategoryId = this._activetedRouder.snapshot.params['subID'];
    console.log(this.subCategoryId);
    this._GetApiService.getCategories("subCategories").subscribe((res) => {
      this.subCategories=res['Sub Categories'];
      for(let i=0;i<this.subCategories.length;i++) {
       if(this.subCategories[i].category_id == this.subCategoryId){
        this.subcate.push(this.subCategories[i])
       }
      }
      this.spiner =false;
    })
  }

}
