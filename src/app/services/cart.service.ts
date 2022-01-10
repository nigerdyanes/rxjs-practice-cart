import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = new BehaviorSubject<Array<IProduct>>([]);
  currentCartItems$ = this.cart.asObservable();

  constructor() { }

  addToCart(product: IProduct) {
    let itemsCart = this.cart.getValue();
    
    if (itemsCart.length > 0) {
      itemsCart.push(product);
      this.cart.next(itemsCart);  
    }else {
      itemsCart = [];
      itemsCart.push(product);
      this.cart.next(itemsCart);
    }
  }

  removeCart(product: IProduct) {
    let itemsCart = this.cart.getValue();
    let newArrayCart = itemsCart.filter(item => item.id != product.id);
    this.cart.next(newArrayCart);
  }
}
