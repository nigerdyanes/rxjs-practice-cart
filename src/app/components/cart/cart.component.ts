import { Component, OnInit, OnDestroy } from '@angular/core';

import { CartService } from "../../services/cart.service";
import { IProduct } from '../../models/product.model';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  cartItems: IProduct[] = []
  totalPayment: number = 0;

  cartSubs: Subscription | undefined;
  cartTotalSubs: Subscription | undefined;

  constructor(
    private cartService:CartService
  ) { }

  ngOnInit(): void {
   this.cartSubs      = this.cartService.currentCartItems$.subscribe(items => this.cartItems = items);
   this.cartTotalSubs = this.cartService.currentCartItems$.pipe(
      map(items => {
        let total = 0;
        items.forEach(item => total += item.price)
        return total;
      })
    ).subscribe(totalPayment => this.totalPayment = totalPayment)
  }

  ngOnDestroy(): void {
    this.cartSubs?.unsubscribe();
    this.cartTotalSubs?.unsubscribe();
  }

}
