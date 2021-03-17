import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }

  ngOnInit() {
    //Get the route
    const routeParams = this.route.snapshot.paramMap;
    //called it that in the route map "products/:productId"
    const productIdFromRoute = Number(routeParams.get("productId"));
    //cycle thru array to get the right onProperty
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
