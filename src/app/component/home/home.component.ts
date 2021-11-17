import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/interface/icategory';
import { GetApiService } from 'src/get-api.service';
GetApiService
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
apis:Icategory|any;
spiner:boolean;
  constructor(private _GetApiService:GetApiService) { 
    this.spiner=true;
   
  }

  ngOnInit(): void {
    this._GetApiService.getCategories("mainCategories").subscribe((res)=>{
      this.apis=res.MainCategories;
      this.spiner=false;
    })

    $('.single-item-rtl').slick({
      autoplay:true,
      rtl: true,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      mobileFirst:true,
      adaptiveHeight: true
    });
    $('.multiple-items').slick({
      rtl: true,
      // autoplay:true,
      mobileFirst:true,
      slidesToShow: 7,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }

}
