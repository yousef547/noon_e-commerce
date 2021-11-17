import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/ViewModel/product';
import { GetApiService } from 'src/get-api.service';
declare var $:any;
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  oneProduct:Product|any;
  IdProduct:any;
  spiner:boolean;
  constructor(private _activetedRouder:ActivatedRoute, private _GetApiService:GetApiService) {
    this.spiner = true;
   }

  ngOnInit(): void {
    $("html, body").animate({ scrollTop: 0 });
    this.IdProduct = this._activetedRouder.snapshot.params["detailsID"];
    this._GetApiService.getProductById("products", this.IdProduct).subscribe((res)=> {
      this.oneProduct=res.Product;
      this.spiner = false;
    })
    }

}
