import { GlobalService } from './../global.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private gService: GlobalService
  ) { }

  getAll = (param: any) => {
    return this.gService.Get('products', param);
  }

  save = (product: any) => {
    return this.gService.Post('products', product); 
  }

  Update = (product: any) => {
    return this.gService.Put(`products/${product.id}`, product);
  }

  Delete = (id: any) => {
    return this.gService.Delete(`products`, id);
  }
}
