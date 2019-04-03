import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {
  productService: ProductServiceService;
  listOfProducts: Array<Product>;
  constructor(productService: ProductServiceService
  ) { 
    debugger
    this.listOfProducts = productService.getAvailableStuff();
  }

  ngOnInit() {
  }

}
