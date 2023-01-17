import { GlobalService } from './../../global.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private gService: GlobalService
  ) { }

  getAll = (param: any) => {
    return this.gService.Get('categories', param);
  }

  save = (category: any) => {
    return this.gService.Post('categories', category); 
  }

  Update = (category: any) => {
    return this.gService.Put(`categories/${category.id}`, category);
  }

  Delete = (id: any) => {
    return this.gService.Delete(`categories`, id);
  }
}
