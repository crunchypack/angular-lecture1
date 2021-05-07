import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  /**
   * Takes current product and uses CartService method addToCart
   * @param product
   */
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Product added to cart');
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    //Get id from current route
    const routeParams = this.route.snapshot.paramMap; // route.snapshot contains info about the active route
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Get product with id
    this.product = products.find(prod => prod.id === productIdFromRoute);
  }
}
