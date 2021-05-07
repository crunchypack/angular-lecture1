import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  // Get the shipping costs from CartService
  shippingCosts = this.cartService.getShippingPrices();

  constructor(private cartService: CartService) {}

  ngOnInit() {}
}
