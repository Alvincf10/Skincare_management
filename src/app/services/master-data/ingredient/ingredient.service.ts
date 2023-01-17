import { GlobalService } from './../../global.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(
    private gService: GlobalService
  ) { }

  getAll = (param: any) => {
    return this.gService.Get('ingridients', param);
  }

  save = (ingredient: any) => {
    return this.gService.Post('ingridients', ingredient); 
  }

  Update = (ingredient: any) => {
    return this.gService.Put(`ingridients/${ingredient.id}`, ingredient);
  }

  Delete = (id: any) => {
    return this.gService.Delete(`ingridients`, id);
  }
}
