import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = []; // Empty array
  /**
   * Adds product to the array
   * @param product
   */
  addToCart(product) {
    this.items.push(product);
    // console.log(this.getItems());
  }
  /**
   * Returns the array
   * @returns items[]
   */
  getItems() {
    return this.items;
  }
  /**
   * Clears the array and returns it
   *  @returns items[]
   */
  cleanCart() {
    this.items = [];
    return this.items;
  }
  /**
   * Uses HttpClient get method to get all shipping prices
   * @returns Response Body {type: string, price: number}
   */
  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  constructor(private http:HttpClient) {}
}
