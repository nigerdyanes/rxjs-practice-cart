import { Component, OnInit, Input } from '@angular/core';

import { CartService } from "../../services/cart.service";
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: IProduct = {
    id: 0,
    product: '',
    price: 0,
    image: ''
  }

  constructor(
    private cartService:CartService,
  ) { }

  ngOnInit(): void {
  }

  addCart(product: IProduct){
    this.cartService.addToCart(product);
  }

  removeCart(product: IProduct){
    this.cartService.removeCart(product);
  }

}
