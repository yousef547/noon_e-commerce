import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


declare var $:any;
@Component({
  selector: 'app-part-nav',
  templateUrl: './part-nav.component.html',
  styleUrls: ['./part-nav.component.scss'],
})

export class PartNavComponent implements OnInit {
 li =document.getElementsByClassName("list");
 item=document.getElementsByClassName("link")
 class:any;
 lists:any;

  constructor() { 
    
  
  }
   
  ngOnInit(): void {
    for(let i=0;i<this.li.length;i++){
      $(this.li[i]).hover(() =>{
        $(".menu").removeClass("d-none")
        this.class = $(this.li[i]).attr("data-target");
        $("." + this.class).addClass("hovers").siblings().removeClass("hovers");
      }) 
    }
    $("#overlay").hover(()=>{
      $(".menu").addClass("d-none")
    });

    for(let i=0;i<this.item.length;i++) {
      $(this.item[i]).hover(()=>{
        $(this.item[i]).addClass("selected").siblings().removeClass("selected");
        this.lists = $(this.item[i]).attr("data-target");
        
        $("." + this.lists).addClass("hovers").siblings().removeClass("hovers");
       
      })
    }

    $(document).scroll(()=>{
      $(".menu").addClass("d-none")
    })
   
  }

}
