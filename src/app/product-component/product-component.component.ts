import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {

  @Input()
  product: Product;

  constructor() {
   // this.product = new Product();
   }

  ngOnInit() {
  }
  onBuy(){
    console.log("beer has been bought")
  }
}
