import { Category } from '../category.enum';
import { Injectable } from '@angular/core';

@Injectable()
export class Product {
    name: string = 'baltica';
    description: string = 'pivo dlya bomjey';
    price: number = 33;
    category: Category = Category.lager;
    isAvailable: boolean = true;

    constructor(
      name?: string,
      description?: string,
      price?: number,
      category?: Category,
      isAvailable?: boolean
      ) {

       }
  }