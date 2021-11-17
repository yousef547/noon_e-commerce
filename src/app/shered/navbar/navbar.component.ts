import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  show:number;
  constructor() { 
    this.show=0;
  }
  showAntherSection(num:number){
    this.show = num;
  }
  ngOnInit(): void {
  }

}
