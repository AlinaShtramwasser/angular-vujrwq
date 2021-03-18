import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CartService {
  items = [];
  shiping: any = [];
  constructor(private http: HttpClient) {}

  addToCart(product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  ngOnInit() {}
  getShippingPrices() {
    //console.log("on init");
    this.http
      .get<any>("/assets/shipping.json")
      .subscribe(data => {
        //console.log("here" + data);
        this.shiping = data;
      });
    return this.shiping;
  }
}
