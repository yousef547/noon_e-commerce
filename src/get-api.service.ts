import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable} from "rxjs"

import { environment } from './environments/environment.prod';
import { Product } from './app/ViewModel/product';
@Injectable({
  providedIn: 'root'
})
export class GetApiService {
items: any[] = [];
  constructor(private _HttpClient:HttpClient) { }
  getCategories(main:string):Observable<any> {
    return this._HttpClient.get(`${environment.API_URL}/${main}?access_token=syEt93K5Gsg2Ozdgv8oK22NQLYNzMJtiLHD06JMrpkqF05Kc5VCl9aeWgpcdAB6r`)
  }
  getProductById(main:string,id:number):Observable<any> {
    return this._HttpClient.get(`${environment.API_URL}/${main}/show/${id}?access_token=syEt93K5Gsg2Ozdgv8oK22NQLYNzMJtiLHD06JMrpkqF05Kc5VCl9aeWgpcdAB6r`)
  }

  addToCart(product: any) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }
}
