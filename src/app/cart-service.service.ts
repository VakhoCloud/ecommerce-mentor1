import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private listOfProductsToCheckout: any[] = [];
  cartProducts = new Subject<String[]>(); 

  getProducts() { 
    return this.listOfProductsToCheckout.slice();
  }

  addProductToCart(quantity: number) {
    this.listOfProductsToCheckout.push(['Fall Limited Edition Sneakers', quantity, 125])
    this.cartProducts.next(this.listOfProductsToCheckout.slice());
  }

  removeProductFromCart(index: number) {
    this.listOfProductsToCheckout.splice(index, 1);
    this.cartProducts.next(this.listOfProductsToCheckout.slice());
  }
}
