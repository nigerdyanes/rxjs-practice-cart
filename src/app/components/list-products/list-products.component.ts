import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  @Input() products: IProduct[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
