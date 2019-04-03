import { Injectable } from '@angular/core';
import { Product } from './shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
  getAvailableStuff(){
   return [
     new Product("tuborg"),
     new Product("tinkof"),
     new Product("hz"),

   ]
  }
}
